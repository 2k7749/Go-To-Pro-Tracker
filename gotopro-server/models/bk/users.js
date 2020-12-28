const { Model } = require("sequelize");
const sequelize = require("sequelize");

const usersTable = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        userid:{
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Users;
};

module.exports = usersTable;