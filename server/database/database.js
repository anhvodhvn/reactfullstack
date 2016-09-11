var mongoose = require('mongoose');
var GroceryItem = require('./../models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function(){
    console.log('connected ...');

    mongoose.connection.db.dropDatabase();
    

    var items =[
        {
            name: 'Ice Cream'
        },
        {
            name: 'Waffles'
        },
        {
            name: 'Sugar Cake'
        },
        {
            name: 'Candy',
            purchased: true
        },
        {
            name: 'Chocopie',
            purchased: true
        },
        {
            name: 'Snarks'
        },
        {
            name: 'Blue Tea'
        }
    ];
    
    items.forEach(function(item){
        console.log(item);
        new GroceryItem(item).save();
    });
})