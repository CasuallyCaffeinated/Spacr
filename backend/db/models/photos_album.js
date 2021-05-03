'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photos_Album = sequelize.define('Photos_Album', {
    albumId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {});
  Photos_Album.associate = function(models) {
    // associations can be defined here
  };
  return Photos_Album;
};