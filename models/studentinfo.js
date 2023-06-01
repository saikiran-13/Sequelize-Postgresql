'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studentinfo extends Model {
    static associate(models) {
      // define association here
    }
  }
  Studentinfo.init(
    {
      name: {
        type: DataTypes.STRING,
        defaultValue: 'abc',
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      course: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Studentinfo',
    },
  );
  return Studentinfo;
};
