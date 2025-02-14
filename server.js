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

// middleware
app.use(express.urlencoded({ extended: false }));



// Get /
app.get('/', async (requestAnimationFrame, res) => {
    res.render("index.ejs");
});

// Get /fruits/new
app.get('/fruits/new', (req, res) => {
    res.render("new.ejs");
});


// POST /fruits - uses async because it is a database action
// used .body here because isReadyToEat is located in the 
// body section of the HTML in the ejs
app.post('/fruits', async (req, res) => {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    } 
    
    await Fruit.create(req.body);
    res.redirect('/fruits/new'); // this makes browser refresh and we will see the response in the terminal
})
  

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
