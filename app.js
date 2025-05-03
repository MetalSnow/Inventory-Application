const express = require('express');
const path = require('node:path');
const indexRouter = require('./routers/indexRouter');
const categoryRouter = require('./routers/categoryRouter');

const app = express();

app.use(express.urlencoded());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

const assetspath = path.join(__dirname, '/public');

app.use(express.static(assetspath));

app.use(indexRouter);
app.use(categoryRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
