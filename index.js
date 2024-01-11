const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


//import routes
const product_routes = require("./routes/products")

//middleware(setting routes)
app.use("/api/products", product_routes)




app.get('/test', (req, res) => {
    res.send('Welcome')
});

app.listen(PORT, () => {
    try {
        console.log(`Port running on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})