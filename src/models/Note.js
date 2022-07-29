const { DataTypes } = require('sequelize');
const sequelize = require("../db")

const Note = sequelize.define('note', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true,
    },
    title:{
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
  });

module.exports = Note;