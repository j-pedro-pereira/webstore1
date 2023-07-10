const databaseConfig = require("../config/databaseConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected...");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewsModel.js")(sequelize, DataTypes);
db.user = require("./userModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("Re-sync done!");
});

module.exports = db;