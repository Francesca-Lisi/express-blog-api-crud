const posts = require('./data/posts');
const postsRouter = require('./router/posts')
const errorsHandler = require('./middlewares/errorsHandler')
const notFound = require('./middlewares/notFound')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server dei post')
})

app.use('/posts', postsRouter)

app.use(errorsHandler)

app.use(notFound)

app.listen(port, () => {
  console.log('sono in ascolto')
})

