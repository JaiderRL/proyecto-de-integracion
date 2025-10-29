const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Definición del modelo Task
const Task = sequelize.define(
    "Task",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Task;
