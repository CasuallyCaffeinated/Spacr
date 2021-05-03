'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(2500)
    },
    photoUrl: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    authorCredited: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Photo;
};
