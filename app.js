const posts = require('./data/posts');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server dei post')
})

app.listen(port, () => {
  console.log('sono in ascolto')
})


console.log(posts)