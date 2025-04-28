const { Router } = require('express');

const groceryRouter = Router();

groceryRouter.get('/grocery', getGroceryItems);
groceryRouter.post('/grocery', createGroceryItem);
groceryRouter.post('/grocery', updateGroceryItem);
groceryRouter.delete('/grocery', deleteGroceryItem);

module.exports = groceryRouter;
