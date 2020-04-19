const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "Astnds19!",
  database: "cows",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((Err) => {
    console.log("not connected because " + Err);
  });

module.exports = sequelize.define(
  "cow",
  {
    cowId: {
      type: Sequelize.INTEGER,
      allownull: false,
      primaryKey: true,
    },
    cowName: {
      type: Sequelize.STRING,
      allownull: false,
    },
    description: {
      type: Sequelize.STRING,
      allownull: false,
    },
  },
  { timestamps: false }
);
