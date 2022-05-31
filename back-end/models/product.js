'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Product.belongsTo(models.User, {
        as: "user",
        foreignKey: {
          name: "idUser",
        },
      });

      Product.hasMany(models.Transaction, {
        as: "transactions",
        foreignKey: {
          name: "idProduct",
        },
      });

      // belongs to many category
      Product.belongsToMany(models.Categorie, {
        as: "categories",
        through: {
          model: "ProductCategorie",
          as: "bridge",
        },
        foreignKey: "idProduct",
      });
    }
  }

  Product.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};