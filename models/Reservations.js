const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Reservation extends Model {}

Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        party_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reservation_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'customer',
            key: 'id',
            },
        },
        
    },
    
    {
    
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation',
    }
);

module.exports = Reservation;