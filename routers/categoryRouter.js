const { Router } = require('express');
const {
  getCategories,
  createCategory,
} = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', createCategory);
// categoryRouter.put('/categories', updateCategory);
// categoryRouter.delete('/categories', deleteCategory);

module.exports = categoryRouter;
