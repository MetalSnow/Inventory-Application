const expressAsyncHandler = require('express-async-handler');
const dbCategories = require('../db/categoryQueries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const { body, validationResult } = require('express-validator');

const alphaErr = 'must only contain letters.';

const validateUser = [
  body('category').trim().isAlpha().withMessage(`Category name ${alphaErr}`),
];

const organizeCategories = (categories) => {
  const freshMart = categories.filter((item) => item.seller === 'FreshMart');
  const organicHeaven = categories.filter(
    (item) => item.seller === 'Organic Heaven'
  );
  return { freshMart, organicHeaven };
};

const getCategories = expressAsyncHandler(async (req, res) => {
  const categories = await dbCategories.getAllCategories();

  if (!categories) {
    throw new CustomNotFoundError('No Categories have been found');
  }

  res.render('categories', {
    title: 'Grocery Store',
    categories: organizeCategories(categories),
  });
});

const createCategory = [
  validateUser,
  expressAsyncHandler(async (req, res) => {
    const errors = validationResult(req);
    const categories = await dbCategories.getAllCategories();

    if (!errors.isEmpty()) {
      return res.status(400).render('categories', {
        title: 'Grocery Store',
        categories: organizeCategories(categories),
        errors: errors.array(),
      });
    }
    const sellerId = req.body.seller == 'FreshMart' ? 1 : 2;
    const category = { name: req.body.category, sellerId: sellerId };

    await dbCategories.insertCategory(category);
    res.redirect('/categories');
  }),
];

const deleteCategory = expressAsyncHandler(async (req, res) => {
  const categoryId = req.params.id;

  await dbCategories.deleteCategory(categoryId);
  res.redirect('/categories');
});

const updateCategory = expressAsyncHandler(async (req, res) => {
  const categoryId = req.params.id;
  const newName = req.body.newName;

  await dbCategories.updateCategory(categoryId, newName);
  res.redirect('/categories');
});

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
