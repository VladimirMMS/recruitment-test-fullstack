const express = require('express');
const cors = require('cors')
const {connectToDb} = require('./src/db/config/config')
const { router } = require('./src/routes/index')

const app = express()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())
app.use(router)



app.listen(8000, async () => {
    const sequelize = await connectToDb()
    sequelize.sync({force:true})
    console.log('Server Listen in port', 8000)
    
})