"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First Name Required",
          },
          notEmpty: {
            msg: "First Name Required",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Last Name Required",
          },
          notEmpty: {
            msg: "Last Name Required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "First Name Required",
          },
          isEmail: {
            msg: "Invalid email",
          },
          notEmpty: {
            msg: "Email Required"
          }
        },
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Birthdate Required",
          },
          notEmpty: {
            msg: "Birthdate Required"
          }
          
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Location Required"
          },
          notEmpty: {
            msg: "Location Required"
          }
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Country Required"
          },
          notEmpty: {
            msg: "Country Required"
          }
        }
      },
      doSent: {
        type: DataTypes.DATE
      }
    },
    {
      hooks: {
        beforeCreate(User, opt) {
          User.doSent = new Date()
        }
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
