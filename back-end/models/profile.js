'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Profile.belongsTo(models.User, {
        as: "user",
        foreignKey: {
          name: "idUser",
        }
      });
    }
  }
  Profile.init({
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};