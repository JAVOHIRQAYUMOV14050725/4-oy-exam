const { readFile, writeFile } = require("../utils/fs");
const { verify } = require("../utils/jwt");

const verifyToken = (req, res, next) => {
  try {
    let admins = readFile("admins");
    let jwt = req.cookies.hello;

    if (!jwt) {
      res.redirect("/login");
    }

    let data = verify(jwt);
    let findAdmins = admins.find((el) => el.id === data.id);

    if (findAdmins) {
      next();
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = verifyToken;
