const {Router} = require('express')
const { productRouter } = require('./product/product.route')
const {authRouter} = require('./auth/auth.route')
const router = Router()


router.use('/product', productRouter)
router.use('/auth', authRouter)

module.exports = {
    router
};