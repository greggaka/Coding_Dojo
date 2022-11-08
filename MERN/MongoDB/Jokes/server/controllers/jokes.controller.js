const Joke = require ('../models/jokes.model');

module.exports.create = (req, res) => {
    Joke.create(req.body)
    .then((newJoke) => (res.json({results: newJoke})))
    .catch(err => res.json({err:err}))
}

module.exports.getall = (req, res) => {
    Joke.find ()
    .then((allJokes) => {res.json({results: allJokes})})
    .catch((err) => res.json({err:err}))
}

module.exports.getone = (req, res) => {
    Joke.findOne ({_id: req.params.id})
    .then((joke) => {res.json({results: joke})})
    .catch(err => res.json({err:err}))
}

module.exports.update = (req, res) => {
    Joke.findOneAndUpdate ({_id: req.params.id}, req.body, {new: true})
    .then((updateJoke) => {res.json({results: updateJoke})}) 
    .catch(err => res.json({err:err}))
}

module.exports.delete = (req, res) => {
    Joke.deleteOne ({_id: req.params.id})
    .then((deleteJoke) => {res.json({results: deleteJoke})})
    .catch(err => res.json({err:err}))
}