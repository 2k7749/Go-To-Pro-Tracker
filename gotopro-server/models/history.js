const sequelize = require("sequelize");

const historyTable = (sequelize, DataTypes) => {
    const History = sequelize.define("History", {
        historyid: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        success:{
            allowNull: false,
            type: DataTypes.BOOLEAN,
        },
    });
    //Create Relationship Associate with User
    History.associate = (models) => {
        History.belongsTo(models.Users, {
            foreignKey: { allowNull: false },
            onDelete: 'CASCADE',
        });
    };
    return History;
};

module.exports = historyTable;