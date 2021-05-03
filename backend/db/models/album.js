'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};