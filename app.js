const express = require('express');
const path = require('node:path');
const indexRouter = require('./routers/indexRouter');
const categoryRouter = require('./routers/categoryRouter');
const groceryRouter = require('./routers/groceryItemRouter');

const app = express();

const assetspath = path.join(__dirname, '/public');

app.use(express.static(assetspath));

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(indexRouter);
app.use(categoryRouter);
app.use(groceryRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
