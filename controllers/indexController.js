const getIndexPage = (req, res) => {
  res.render('index', { title: 'Grocery Store' });
};

module.exports = getIndexPage;
