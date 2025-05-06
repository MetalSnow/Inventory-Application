const { Router } = require('express');
const {
  getGroceryItems,
  createGroceryItem,
  deleteGroceryItem,
} = require('../controllers/groceryController');

const groceryRouter = Router();

groceryRouter.get('/items', getGroceryItems);
groceryRouter.post('/items/create', createGroceryItem);
// groceryRouter.post('/item', updateGroceryItem);
groceryRouter.post('/items/:id/delete', deleteGroceryItem);

module.exports = groceryRouter;
