const {sequelize} = require('../config/config')
const {DataTypes} = require('sequelize')



const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    productName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.00
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    } 
})

module.exports = {Product};