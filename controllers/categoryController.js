const expressAsyncHandler = require('express-async-handler');
const db = require('../db/queries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const { body, validationResult } = require('express-validator');

const alphaErr = 'must only contain letters.';
const mandatory = 'All fields are mandatory.';

// const validateUser = [
//   body('category')
//     .trim()
//     .isAlpha()
//     .withMessage(`Category name ${alphaErr}`)
//     .notEmpty()
//     .withMessage(mandatory),
//   body('seller')
//     .trim()
//     .isAlpha()
//     .withMessage(`Seller ${alphaErr}`)
//     .notEmpty()
//     .withMessage(mandatory),
// ];

const getCategories = expressAsyncHandler(async (req, res) => {
  const categories = await db.getAllCategories();

  if (!categories) {
    throw new CustomNotFoundError('No Categories have been found');
  }

  res.render('categories', { title: 'Grocery Store', categories: categories });
});

const createCategory = expressAsyncHandler(async (req, res) => {
  const sellerId = req.body.seller == 'FreshMart' ? 1 : 2;
  const category = { name: req.body.category, sellerId: sellerId };

  await db.insertCategory(category);
  res.redirect('/categories');
});

const deleteCategory = expressAsyncHandler(async (req, res) => {
  const categoryId = req.params.id;

  await db.deleteCategory(categoryId);
  res.redirect('/categories');
});
module.exports = { getCategories, createCategory, deleteCategory };
