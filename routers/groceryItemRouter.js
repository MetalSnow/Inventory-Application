const { Router } = require('express');
const {
  getGroceryItems,
  createGroceryItem,
  deleteGroceryItem,
  updateGroceryItem,
} = require('../controllers/groceryController');

const groceryRouter = Router();

groceryRouter.use((req, res, next) => {
  if (req.body?._method === 'PATCH') {
    req.method = 'PATCH';
    delete req.body._method;
  }
  next();
});

groceryRouter.get('/items', getGroceryItems);
groceryRouter.post('/items/create', createGroceryItem);
groceryRouter.post('/items/:id/delete', deleteGroceryItem);
groceryRouter.patch('/items/:id/update', updateGroceryItem);

module.exports = groceryRouter;
