module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    resetToken: DataTypes.STRING,
    resetTokenExpiry: DataTypes.DATE
  });

  User.associate = function(models) {
    // Associate members
    models.user.belongsToMany(models.group, { as: 'memberOf', through: 'group_members' });
    models.group.belongsToMany(models.user, { as: 'members', through: 'group_members' });
    // Associate administrators
    models.user.belongsToMany(models.group, { as: 'adminOf', through: 'group_admins' });
    models.group.belongsToMany(models.user, { as: 'admins', through: 'group_admins' });
  };

  return User;
};
