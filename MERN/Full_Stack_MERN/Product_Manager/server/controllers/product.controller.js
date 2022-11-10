const Product = require ('../models/product.model')

module.exports.getall = (req, res) => {
    Product.find()
    .then((allProducts) => {res.json({results: allProducts})})
    .catch(err => res.status(400).json({err}))
}

module.exports.create = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {res.json({results: newProduct})})
    .catch(err => res.status(400).json({err}))
}

module.exports.getone = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then ((product) => {res.json({results: product})})
    .catch(err => res.status(400).json({err}))
}

module.exports.update = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then((updatedProduct) => {res.json({results: updatedProduct})})
    .catch(err => res.status(400).json({err}))
}

module.exports.delete = (req,res) => {
    Product.deleteOne ({_id: req.params.id})
    .then((deleteProduct) => {res.json({results: deleteProduct})})
    .catch(err => res.status(400).json({err}))
}