const pool = require('./pool');

const getAllItems = async (categoryId) => {
  const { rows } = await pool.query(
    'SELECT * FROM grocery_items WHERE category_id = ($1)',
    [categoryId]
  );

  return rows;
};

const insertItem = async (newItem) => {
  await pool.query(
    'INSERT INTO grocery_items (name, price, quantity, category_id) VALUES ($1, $2, $3, $4)',
    [newItem.name, newItem.price, newItem.quantity, newItem.categoryId]
  );
};

const deleteItem = async (itemId) => {
  await pool.query('DELETE FROM grocery_items WHERE id = ($1)', [itemId]);
};

module.exports = { getAllItems, insertItem, deleteItem };
