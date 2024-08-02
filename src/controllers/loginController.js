const { readFile } = require("../utils/fs");
const { sign } = require("../utils/jwt");

const getLogin = (req, res) => {
  res.render("login");
};

const postLogin = (req, res) => {
  let admins = readFile("admins");
  let { user, username, password } = req.body;
  let admin = admins.find(el=>el.user===user && el.username === username && el.password === password
  );

  if (admin) {
    let jwt = sign({ id: admin.id });
    res.cookie("hello", jwt);
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  getLogin,
  postLogin,
};
