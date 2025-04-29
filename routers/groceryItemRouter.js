const { Router } = require('express');

const groceryRouter = Router();

groceryRouter.get('/item', getGroceryItems);
groceryRouter.post('/item', createGroceryItem);
groceryRouter.post('/item', updateGroceryItem);
groceryRouter.delete('/item', deleteGroceryItem);

module.exports = groceryRouter;
