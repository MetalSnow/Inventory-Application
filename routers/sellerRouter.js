const { Router } = require('express');

const sellerRouter = Router();

sellerRouter.get('/sellers', getSellersName);

module.exports = sellerRouter;
