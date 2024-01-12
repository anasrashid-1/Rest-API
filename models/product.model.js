const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true
    },
    price : {
        type : 'number',
        required : [true,  "price must be required"]
    },
    featured: {
        type : 'boolean',
        default : false
    },
    rating: {
        type : 'number',
        default : 5
    },
    company: {
        type : 'string',
        enum: {
            values: ["apple", "samsung", "dell", "hp"], //only companies which we want
            message: `{VALUEs} is not supported` // for error messages
        }
    } 
})


//creating a model(collection in mongo db)
const Product = mongoose.model('Product', productSchema); //we give the name of the collection singular but in db its get converts to plural
module.exports = Product;