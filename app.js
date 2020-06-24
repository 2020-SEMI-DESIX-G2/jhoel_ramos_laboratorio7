require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

const connectDb = require('./dbConfig');
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', routes);

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Ejecutando en el puerto ${PORT}`);
    });
});