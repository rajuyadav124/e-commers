const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb://mongo:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
