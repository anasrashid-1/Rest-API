require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./db/connect');
const ProductModel = require('./models/product.model');
const productsdatajson = require('./productsdata.json');


const pushData = async () => {
    try{
        await connect(process.env.MONGO_URL);
        console.log("connected to db");
        // console.log("Data to be inserted:", productsdatajson);
        console.log("Before data insertion");
        await ProductModel.create(productsdatajson);
        console.log("After data insertion");
        console.log("Data inserted successfully");
    } catch(error){
        console.log(error);
    } finally{
        await mongoose.connection.close();
        console.log("Connection closed");
    }
}

pushData();