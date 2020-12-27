const sequelize = require("sequelize");

const dutiesTable = (sequelize, DataTypes) => {
    const Duties = sequelize.define("Duties", {
        dutyid: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        dutyname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentstreak: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        maxstreak: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totaltime: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dutytype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dutydaily: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Duties.associate = (models) => {
        Duties.belongsTo(models.Users, {
            foreignKey: { allowNull: false },
            onDelete: 'CASCADE',
        });
    };
    return Duties;
};

module.exports = dutiesTable;