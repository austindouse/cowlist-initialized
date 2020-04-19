const axios = require("axios");

let config = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

module.exports = {
  getCows: () => {
    return axios.get("http://127.0.0.1:3000/api/cows");
  },
  addnewCow: () => {
    return axios.post("http://127.0.0.1:3000/api/cows");
  },
};
