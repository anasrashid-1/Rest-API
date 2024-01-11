const mongoose = require("mongoose");

const connection = () => {
    return mongoose.connect("mongodb+srv://anasrashidshah:<password>@cluster0.e3co5s2.mongodb.net/?retryWrites=true&w=majority")
}