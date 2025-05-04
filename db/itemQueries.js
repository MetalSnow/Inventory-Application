const pool = require('./pool');

const getAllItems = async (categoryId) => {
  const { rows } = await pool.query(
    'SELECT * FROM groceryItem WHERE category_id = ($1)',
    [categoryId]
  );

  return rows;
};

module.exports = { getAllItems };
