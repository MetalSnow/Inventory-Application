const pool = require('./pool');

const getAllItems = async (categoryId) => {
  const { rows } = await pool.query(
    'SELECT * FROM grocery_items WHERE category_id = ($1) ORDER BY id',
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

const updateItem = async (item) => {
  await pool.query(
    'UPDATE grocery_items SET name = ($1), price = ($2), quantity = ($3)  WHERE id = ($4)',
    [item.name, item.price, item.quantity, item.id]
  );
};

module.exports = { getAllItems, insertItem, deleteItem, updateItem };
