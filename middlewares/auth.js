require('dotenv').config();

const authenticateAdmin = (req, res, next) => {
  const adminKey = req.body.adminKey;

  if (adminKey === process.env.ADMIN_KEY) {
    return next();
  }
  res.redirect('/categories');
};

module.exports = authenticateAdmin;
