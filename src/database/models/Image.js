'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product,{as:"products",foreignKey:'image_id'})
    }
  }
  image.init({
    name: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return image;
};