const pool = require('./pool');

const getAllCategories = async () => {
  const { rows } =
    await pool.query(`SELECT category.id as id, category.name as category, seller.name as seller FROM category
                        JOIN seller ON category.seller_id = seller.id ORDER BY category.id`);
  return rows;
};

const insertCategory = async (category) => {
  await pool.query('INSERT INTO category (name, seller_id) VALUES ($1, $2)', [
    category.name,
    category.sellerId,
  ]);
};

const deleteCategory = async (id) => {
  await pool.query('DELETE FROM category WHERE id = ($1)', [id]);
};

const updateCategory = async (categoryId, newName) => {
  await pool.query('UPDATE category SET name = ($1) WHERE id = ($2) ', [
    newName,
    categoryId,
  ]);
};

module.exports = {
  getAllCategories,
  insertCategory,
  deleteCategory,
  updateCategory,
};
