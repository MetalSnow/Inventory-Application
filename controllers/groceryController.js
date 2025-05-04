const expressAsyncHandler = require('express-async-handler');
const dbItems = require('../db/itemQueries');

const getGroceryItems = expressAsyncHandler(async (req, res) => {
  const categoryId = req.params.id;
  const items = await dbItems.getAllItems(categoryId);

  res.render('items', { title: 'Grocery Store', items: items });
});

module.exports = { getGroceryItems };
