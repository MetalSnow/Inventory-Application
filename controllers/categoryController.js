const expressAsyncHandler = require('express-async-handler');
const dbCategories = require('../db/categoryQueries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getCategories = expressAsyncHandler(async (req, res) => {
  const categories = await dbCategories.getAllCategories();

  if (!categories) {
    throw new CustomNotFoundError('No Categories have been found');
  }

  const freshMartCategories = categories.filter(
    (item) => item.seller === 'FreshMart'
  );
  const organicHeavenCategories = categories.filter(
    (item) => item.seller === 'Organic Heaven'
  );

  res.render('categories', {
    title: 'Grocery Store',
    categories: {
      freshMart: freshMartCategories,
      organicHeaven: organicHeavenCategories,
    },
  });
});

const createCategory = expressAsyncHandler(async (req, res) => {
  const sellerId = req.body.seller == 'FreshMart' ? 1 : 2;
  const category = { name: req.body.category, sellerId: sellerId };

  await dbCategories.insertCategory(category);
  res.redirect('/categories');
});

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
