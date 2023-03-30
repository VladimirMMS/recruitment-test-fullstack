const {Router} = require('express')
const {getProduct,createProduct} = require('./controllers/product.controller');
const authorization = require('../../middleware/authorization');
const upload = require('../../middleware/image')

const router = Router()

router.get('/all', authorization,getProduct)
router.post('/create',authorization,upload.single('file'),createProduct)

module.exports = {
    productRouter: router
};
