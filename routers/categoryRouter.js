const { Router } = require('express');

const categoryRouter = Router();

categoryRouter.get('/category', getCategories);
categoryRouter.post('/category', createCategory);
categoryRouter.post('/category', updateCategory);
categoryRouter.delete('/category', deleteCategory);

module.exports = categoryRouter;
