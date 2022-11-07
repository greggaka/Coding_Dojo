const express = require('express');
const app = express();
const port = 8000;
const {faker} = require("@faker-js/faker");
// import { faker } from @faker-js/faker;

app.use (express.json());
app.use (express.urlencoded({extended: true}));

const User = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        password: faker.internet.password(),
    }
    return newUser;
}

const Company = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
    return newCompany;
}

app.get('/api', (req, res) => {
    res.json({message: "Test"})
});

app.post('/api/users/new', (req, res) => {
    let user = User();
    res.json({results: user})
});

app.post('/api/companies/new', (req, res) => {
    let company = Company();
    res.json({results: company})
})

app.post('/api/user/company', (req, res) => {
    let user = User();
    let company = Company();
    res.json({user, company})
})

app.listen(port, () => console.log(`Welcome to Faker API ${port}`));