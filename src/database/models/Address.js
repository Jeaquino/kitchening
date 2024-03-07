'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{as:'users', foreignKey:'user_id',onDelete: 'cascade'});
    }
  }
  Address.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};