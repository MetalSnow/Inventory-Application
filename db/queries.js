const pool = require('./pool');

const getAllCategories = async () => {
  const { rows } =
    await pool.query(`SELECT category.name as category, seller.name as seller FROM category
                        JOIN seller ON category.seller_id = seller.id`);
  return rows;
};

module.exports = { getAllCategories };
