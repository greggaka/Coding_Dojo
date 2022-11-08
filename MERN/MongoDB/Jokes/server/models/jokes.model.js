const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "'Setup' field is required"],
        minLength:[10, "'Setup' field must be at least 10 characters."]
    },
    punchline: {
        type: String,
        required: [true, "'Punchline' field is required"],
        minLength: [3, "'Punchline' field must be at least 3 characters."]
    },
}, {timestamps: true})

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;