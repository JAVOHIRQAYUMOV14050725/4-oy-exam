const jwt = require("jsonwebtoken");

function sign(payload) {
  return jwt.sign(payload, "hello");
}

function verify(token) {
  return jwt.verify(token, "hello");
}

module.exports = {
  sign,
  verify,
};
