const mongoose = require('mongoose');

const database = "jokes";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Established connection to ${database} database`))
.catch ((err) => console.log (`Error estalishing connection to ${err}`))