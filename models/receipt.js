
   module.exports = function (sequelize, DataTypes){

  var receipt = sequelize.define("Receipt",{

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    charityName:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    category:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
	   Amount_donated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 7]
    	}
    },
  },
  {
    classMethods: {
    associate: function(models){
      Receipt.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
})
return receipt;
}
