'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      // define association here
      Post.belongsTo(models.Cliente, {foreignKey: 'clienteId'})
    }
  }
  Post.init({
    titulo: DataTypes.STRING,
    texto: DataTypes.STRING,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,  
    modelName: 'Post',
  });
  return Post;
};