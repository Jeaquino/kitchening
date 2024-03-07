'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Item,{as:"items",foreignKey:'order_id',onDelete: 'CASCADE'});
      //this.belongsTo(models.User,{as:'users',foreignKey:'user_id'});
      //this.belongsTo(models.Status,{as:'statuses',foreignKey:'status_id'});
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};