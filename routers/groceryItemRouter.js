const { Router } = require('express');
const { getGroceryItems } = require('../controllers/groceryController');

const groceryRouter = Router();

groceryRouter.get('/items/:id', getGroceryItems);
// groceryRouter.post('/item', createGroceryItem);
// groceryRouter.post('/item', updateGroceryItem);
// groceryRouter.delete('/item', deleteGroceryItem);

module.exports = groceryRouter;
