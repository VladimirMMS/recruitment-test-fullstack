const {Sequelize} = require('sequelize')
require('dotenv').config();

const {POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    PORT,
    HOST} = process.env;

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: 'postgres'
  
});

async function connectToDb() {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
    
}

module.exports = {
    connectToDb,
    sequelize
}