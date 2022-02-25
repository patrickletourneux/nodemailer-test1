/* eslint linebreak-style: ["error", "windows"] */
require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const app = express();

require('./app/helpers/docHelpers')(app);

const multer = require('multer');
const bodyParser = multer();
app.use(bodyParser.none());

app.use(express.urlencoded({extended: true}));

app.use(express.static('./public'));

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
