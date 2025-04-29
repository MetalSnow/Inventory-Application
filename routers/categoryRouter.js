const { Router } = require('express');
const getCategories = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);
// categoryRouter.post('/categories', createCategory);
// categoryRouter.post('/categories', updateCategory);
// categoryRouter.delete('/categories', deleteCategory);

module.exports = categoryRouter;
