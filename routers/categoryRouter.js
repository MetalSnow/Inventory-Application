const { Router } = require('express');
const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require('../controllers/categoryController');
const authenticateAdmin = require('../middlewares/auth');

const categoryRouter = Router();

categoryRouter.use((req, res, next) => {
  if (req.body?._method === 'PATCH') {
    req.method = 'PATCH';
    delete req.body._method;
  }
  next();
});

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', createCategory);
categoryRouter.post(
  '/categories/:id/delete',
  authenticateAdmin,
  deleteCategory
);
categoryRouter.patch('/categories/:id/update', updateCategory);

module.exports = categoryRouter;
