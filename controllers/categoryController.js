const db = require('../db/queries');

const getCategories = async (req, res) => {
  const categories = await db.getAllCategories();
  res.render('categories', { title: 'Grocery Store', categories: categories });
};

module.exports = getCategories;
