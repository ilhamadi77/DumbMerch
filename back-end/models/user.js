'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {
        as: "profile",
        foreignKey: {
          name: "idUser",
        },
      });

      //hasMany to product model
      User.hasMany(models.Product, {
        as: "products",
        foreignKey: {
          name: "idUser",
        },
      });

      //hasMany association to transaction model
      User.hasMany(models.Transaction, {
        as: "buyerTransactions",
        foreignKey: {
          name: "idBuyer",
        },
      });
      User.hasMany(models.Transaction, {
        as: "sellerTransactions",
        foreignKey: {
          name: "idSeller",
        },
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'Users',
    modelName: 'User',
  });
  return User;
};