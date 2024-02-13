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
        subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }, tax: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }, tip: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }, total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        items: {
            type: DataTypes.JSON,
            allowNull: true,
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

