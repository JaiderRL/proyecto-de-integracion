const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/todo.sqlite',
    logging: false,
});

module.exports = sequelize;
