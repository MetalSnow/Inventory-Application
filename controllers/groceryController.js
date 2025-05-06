const expressAsyncHandler = require('express-async-handler');
const dbItems = require('../db/itemQueries');

const getGroceryItems = expressAsyncHandler(async (req, res) => {
  const categoryId = req.query.categoryId;
  const items = await dbItems.getAllItems(categoryId);

  res.render('items', { title: 'Grocery Store', items: items });
});

const createGroceryItem = expressAsyncHandler(async (req, res) => {
  const newItem = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    categoryId: req.body.categoryId,
  };

  await dbItems.insertItem(newItem);

  res.redirect(`/items?categoryId=${newItem.categoryId}`);
});

const deleteGroceryItem = expressAsyncHandler(async (req, res) => {
  const itemId = req.params.id;
  console.log(itemId);
  console.log(req.get('referer'));

  await dbItems.deleteItem(itemId);

  res.redirect(req.get('referer'));
});

module.exports = { getGroceryItems, createGroceryItem, deleteGroceryItem };
