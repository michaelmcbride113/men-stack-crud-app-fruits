// adds functionallity for mongoose in this file
const mongoose = require('mongoose');

// creates first schema
const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

//Variable has a capital letter and is singular
// We use mongoose."method" to use a mongoose method
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit; // 'module' relates to this specific file 
// '.exports' exports the file to other places in our code and makes it usable