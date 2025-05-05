const { Router } = require('express');
const {
  getGroceryItems,
  createGroceryItem,
} = require('../controllers/groceryController');

const groceryRouter = Router();

groceryRouter.get('/items', getGroceryItems);
groceryRouter.post('/items/create', createGroceryItem);
// groceryRouter.post('/item', updateGroceryItem);
// groceryRouter.delete('/item', deleteGroceryItem);

module.exports = groceryRouter;
