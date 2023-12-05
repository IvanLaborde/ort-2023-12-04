'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Texts extends Model {
    static associate(models) {
    }
  }
  Texts.init({
    text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      total_length: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      words_count: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      paragraphs_count: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'Texts',
    tableName: 'Texts'
  });
  return Texts;
};