const { Router } = require('express');
const {
  getCategories,
  createCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', createCategory);
categoryRouter.post('/categories/:id/delete', deleteCategory);
// categoryRouter.put('/categories', updateCategory);

module.exports = categoryRouter;
