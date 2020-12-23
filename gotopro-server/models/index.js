"use strict";

const path = require("path");
const basename = path.basename(__filename);
const fs = require("fs");
const Sequelize = require("sequelize");

//CONFIG DB
const DBNAME = 'tracker';
const USER = 'postgres';
const PASSWORD = '111111';

const db = {};

const sequelize = new Sequelize(DBNAME, USER, PASSWORD, {
    dialect: "postgres",
});

// Importing/Reading Models
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });
//Associating Each Model
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
