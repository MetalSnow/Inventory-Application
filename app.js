const express = require('express');
const path = require('node:path');
const indexRouter = require('./routers/indexRouter');
const categoryRouter = require('./routers/categoryRouter');

const app = express();

app.use(express.urlencoded());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(indexRouter);
app.use(categoryRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
