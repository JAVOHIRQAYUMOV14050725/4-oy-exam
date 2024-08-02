const logout = (req, res) => {
  res.clearCookie("hello");
  res.redirect("/login");
};

module.exports = {
  logout,
};
