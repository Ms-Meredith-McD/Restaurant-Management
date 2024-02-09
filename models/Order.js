const { Model, DataTypes, TIME } = require('sequelize');
const sequelize = require('../config/connection');


class Order extends Model {
    
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'customer',
            key: 'id',
            },
        },
        menu_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'menu',
            key: 'id',
            },
        },
    },
    
    {
    
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'order',
    }
);

module.exports = Order;