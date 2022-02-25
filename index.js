/* eslint linebreak-style: ["error", "windows"] */
require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const app = express();

require('./app/helpers/docHelpers')(app);

app.use(router);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
