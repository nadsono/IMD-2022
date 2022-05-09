'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      // define association here
      Post.belongsTo(models.Cliente, {foreignKey: 'clienteID'})
    }
  }
  Post.init({
    titulo: DataTypes.STRING,
    texto: DataTypes.STRING,
    clienteID: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,  
    modelName: 'Post',
  });
  return Post;
};