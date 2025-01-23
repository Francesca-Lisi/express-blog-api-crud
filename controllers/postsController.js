const posts = require('../data/posts')

const index = (req, res) => {
  res.json(posts)


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
  res.send("Modifico il post con id" + req.params.id)
}

const modify = (req, res) => {
  res.send("Modifico parzialmente il post con id" + req.params.id)
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