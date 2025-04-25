const express = require('express');

const app = express();

app.use(json);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
