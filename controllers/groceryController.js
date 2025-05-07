const expressAsyncHandler = require('express-async-handler');
const dbItems = require('../db/itemQueries');

const getGroceryItems = expressAsyncHandler(async (req, res) => {
  const categoryId = req.query.categoryId;
  const items = await dbItems.getAllItems(categoryId);

  res.render('items', { title: 'Grocery Store', items: items });
});

const createGroceryItem = expressAsyncHandler(async (req, res) => {
  const categoryId = req.get('referer').split('').pop();
  const newItem = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    categoryId: categoryId,
  };

  await dbItems.insertItem(newItem);

  res.redirect(req.get('referer') || '/categories');
});

const deleteGroceryItem = expressAsyncHandler(async (req, res) => {
  const itemId = req.params.id;
  console.log(itemId);

  await dbItems.deleteItem(itemId);

  res.redirect(req.get('referer') || '/categories');
});

const updateGroceryItem = expressAsyncHandler(async (req, res) => {
  const updatedItem = {
    id: req.params.id,
    name: req.body.itemName,
    price: req.body.price,
    quantity: req.body.quantity,
  };

  await dbItems.updateItem(updatedItem);

  res.redirect(req.get('referer') || '/categories');
});

module.exports = {
  getGroceryItems,
  createGroceryItem,
  deleteGroceryItem,
  updateGroceryItem,
};
