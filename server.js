// Here is where we import modules
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// connects mongoose through the .env file
mongoose.connect(process.env.MONGODB_URI);

// Checks that mongoose is connected
mongoose.connection.on('connected', () => {
    console.log(`Connected on MongoDB ${mongoose.connection.name}`)
});

const Fruit = require('./models/fruit.js')


// Get /
app.get('/', async (requestAnimationFrame, res) => {
    res.render("index.ejs");
});

app.get('/fruits/new', (req, res) => {
    res.render("fruits/new.ejs");
    res.send('this route sends the user a form page!')
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
