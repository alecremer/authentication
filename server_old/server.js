require('dotenv-safe').config();
require('module-alias/register');
const express = require('express');

const app = express()
const port = 3000

app.get('/login', (req, res) => {
  res.send('Hello World!')
  console.log("get express req")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})