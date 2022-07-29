const { DataTypes } = require('sequelize');
const sequelize = require("../db")
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const User = sequelize.define('user', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

module.exports = User;