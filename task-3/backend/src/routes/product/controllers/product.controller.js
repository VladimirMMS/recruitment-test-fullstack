const {Product}=require('../../../db/models/Product')


const getProduct = async(req, res)=> {
    try {
        const product = await Product.findAll()
        res.status(200).send(product) 
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }
}

const createProduct = async(req, res) => {
    const file = req.file;
    const {productName, price, description} =req.body;
    try {
         const product = await Product.create({
            productName,
            price,
            description,
            imgUrl: `http://localhost:8000/images/${file.filename}`
        })
        res.status(200).send(product)
        
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    getProduct,
    createProduct
    
}