const posts = require('../data/posts')

const index = (req, res) => {
  const { tags } = req.query

  const filteredPost = tags ? posts.filter(post => post.tags.includes(tags)) : posts;
  res.json(filteredPost)
}

const show = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  if (!post) {
    res.status(404)
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'not found'
    })
  }
  res.json(post)
}

const store = (req, res) => {

  const id = posts.at(-1).id + 1;
  const newPost = {
    id,
    ...req.body
  }

  posts.push(newPost);
  console.log(posts);

  res.status(201);
  res.json(posts);
}

const update = (req, res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id == id)

  if (!post) {
    res.status(404)
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'not found'
    })
  }

  for (let key in req.body) {
    post[key] = req.body[key]
  }
  res.json(post)
}

const modify = (req, res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id == id)

  if (!post) {
    res.status(404)
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'not found'
    })
  }

  for (let key in req.body) {
    post[key] = req.body[key]
  }
  res.json(post)
}

const destroy = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  if (!post) {
    res.status(404)
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'not found'
    })
  }
  posts.splice(posts.indexOf(post), 1)
  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}