const getAllProducts = async (req, res) => {
    res.status(200).json({msg : "getting all products"});
}; 


const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg : "getting all productsTesting"});
}; 



module.exports = {getAllProducts, getAllProductsTesting};