const pool = require('./pool');

const getAllCategories = async () => {
  const { rows } =
    await pool.query(`SELECT category.name as category, seller.name as seller FROM category
                        JOIN seller ON category.seller_id = seller.id`);
  return rows;
};

const insertCategory = async (category) => {
  await pool.query('INSERT INTO category (name, seller_id) VALUES ($1, $2)', [
    category.name,
    category.sellerId,
  ]);
};

module.exports = { getAllCategories, insertCategory };
