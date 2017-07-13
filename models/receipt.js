
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
	Amount_donated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 7]
    	}
    },

	Donated_at: {
  	type: DataTypes.DATE,
  	allowNull: false,
  	defaultValue: sequelize.NOW,
  	validate: {
  		len: [1, 8]
    		}
  		}
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
