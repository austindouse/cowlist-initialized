const db = require("../db/config");

module.exports = {
  addACow: (name, description) => {
    return db
      .findOrCreate({
        where: { cowName: name },
        defaults: { description: description },
      })
      .then((data) => {
        console.log("DB CREATE DATA", data);
      })
      .catch((Err) => {
        console.log("DB CREATE ERR", Err);
      });
  },
  showAllCows: () => {
    return db.findAll({
      attributes: ["cowId", "cowName", "description"],
    });
  },
};
