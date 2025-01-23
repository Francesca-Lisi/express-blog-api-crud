const posts = require('../data/posts')

const index = (req, res) => {
  res.send('Elenco dei posts')
}

const show = (req, res) => {
  res.send("visualizzo un post in base all'id" + req.params.id)
}

const store = (req, res) => {
  res.send('Aggiungo un nuovo post')
}

const update = (req, res) => {
  res.send("Modifico il post con id" + req.params.id)
}

const modify = (req, res) => {
  res.send("Modifico parzialmente il post con id" + req.params.id)
}

const destroy = (req, res) => {
  res.send("Elimino il post con id" + req.params.id)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}