module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User",{
    firstName: {DataTypes.STRING, allowNull: false},
    lastName: {DataTypes.STRING, allowNull: false},
    username: {DataTypes.STRING, allowNull: false, unique: true},
    password: {DataTypes.STRING, allowNull: false},
    creditCard: {DataTypes.INTEGER, allowNull: true, isCreditCard: true},
    streetAddress: {DataTypes.STRING, allowNull: false},
    state: {DataTypes.STRING, allowNull: false},
    zip: {DataTypes.INTEGER, allowNull: false},

  })
}
