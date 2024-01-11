const mongoose = require("mongoose");


const connection = (URI) => {
    console.log("connection function called")
    return mongoose.connect(URI)
}


module.exports = connection;