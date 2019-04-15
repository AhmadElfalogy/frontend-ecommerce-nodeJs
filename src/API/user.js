const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const axios = require("axios");
console.log(baseUrl);
module.exports = {
  register(user) {
    return axios.post(`${baseUrl}/users/`, user);
  },
  login(credintial) {
    return axios.post(`${baseUrl}/users/authenticate`, credintial);
  },
  getAllProductsFromUser() {
    axios.get(`${baseUrl}/users/:userId/`).then(res => {
      console.log(res.data);
    });
  }
};
