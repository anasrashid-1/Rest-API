require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const connection = require("./db/connect");


app.get('/', (req, res) => {
    res.send('Welcome')
}); 

//import routes
const product_routes = require("./routes/products")

//middleware(setting routes)
app.use("/api/products", product_routes)

app.listen(PORT, async () => {
    try {
        await connection(process.env.MONGO_URL);
        console.log(`Port running on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})