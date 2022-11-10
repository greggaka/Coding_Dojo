const mongoose = require("mongoose");

const database = "products";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Established connecton to ${database} database.`))
.catch((err) => console.log(`Error establishing connection: ${err}`))