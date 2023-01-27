const express = require('express');
const routes = require('./routes');

const app = express()
const port = 3000

app.get('/login', (req, res) => {
  res.send('Hello World!')
  console.log("get express req")
});

app.get('/', routes);
  
module.exports = app;