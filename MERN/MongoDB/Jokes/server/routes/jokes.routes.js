const jokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.post("/api/joke/new", jokeController.create)

    app.get('/api/jokes', jokeController.getall)

    app.get('/api/joke/:id', jokeController.getone)

    app.put('/api/update/:id', jokeController.update)

    app.delete('/api/joke/delete/:id', jokeController.delete)
}