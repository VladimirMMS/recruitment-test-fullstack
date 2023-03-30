const {Router} = require('express')
const signUp = require('./controllers/register.controller')
const login = require('../auth/controllers/login.controller')

const router = Router()

router.post('/register', signUp)
router.post('/login', login)

module.exports = {
    authRouter: router
};