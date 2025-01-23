const posts = require('./data/posts');
const postsRouter = require('./router/posts')
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server dei post')
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log('sono in ascolto')
})

