const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model { }

Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        menu_item: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        has_nuts: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        has_dairy: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        vegetarian: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        gluten_free: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu',
    }
);

module.exports = Menu;