const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderMenu extends Model {}

OrderMenu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order_menu',
  }
);

module.exports = OrderMenu;
