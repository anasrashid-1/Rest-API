const ProductModel = require('../models/product.model')
const getAllProducts = async (req, res) => {
    const {company, name, featured, sort} = req.query;
    const queryObject = {};
    if(company){
        queryObject.company = {$regex: company, $options: "i" } 
    }

    if(name){
        queryObject.name = { $regex: name, $options: "i" } 
    }

    if(featured){
        queryObject.featured = featured
    }

    let apiData =  ProductModel.find(queryObject);
    if(sort){
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    const allProducts = await apiData
    res.status(200).json({msg : "getting all products", products : allProducts});
}; 

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg : "getting all productsTesting"});
}; 

module.exports = {getAllProducts, getAllProductsTesting};