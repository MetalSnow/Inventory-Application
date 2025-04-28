const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', getIndexPage);

module.exports = indexRouter;
