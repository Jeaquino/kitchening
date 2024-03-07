'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Status,{ through: models.Order, as: 'statuses',foreignKey:'user_id',otherKey:'status_id',onDelete: 'cascade' });
      this.belongsTo(models.Rol,{ as: 'rols', foreignKey:'rol_id'});
      this.hasMany(models.Address,{as:'addresses',foreignKey:'user_id'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    rol_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};