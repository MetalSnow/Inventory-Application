const { Client } = require('pg');
require('dotenv').config();

const SQL = `CREATE TABLE IF NOT EXISTS seller (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS category (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR ( 255 ),
seller_id INTEGER REFERENCES seller(id)
);

CREATE TABLE IF NOT EXISTS groceryItem (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR ( 255 ),
price INTEGER,
quantity INTEGER,
category_id INTEGER REFERENCES category(id)
);

INSERT INTO seller (name) VALUES ('FreshMart'), ('Organic Heaven');

INSERT INTO category (name, seller_id) VALUES 
    ('Fruits', 1), 
    ('Vegetables', 1),
    ('Dairy', 2),
    ('Bakery', 2);
    
INSERT INTO groceryItem (name, price, quantity, category_id) VALUES
    ('Apple', 4, 50, 1),
    ('Banana', 2, 30, 1),
    ('Carrot', 3, 20, 2),
    ('Spinach', 1, 15, 2),
    ('Milk', 5, 10, 3),
    ('Yogurt', 4, 20, 3),
    ('Bread', 5, 15, 4),
    ('Croissant', 4, 17, 4);`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log('done');
}

main();
