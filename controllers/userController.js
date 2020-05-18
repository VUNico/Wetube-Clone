import routes from "../routes";

export const getJoin = (req, res) => res.render("join", { title: "Join" });
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password === password2) {
    res.redirect(routes.home);
  } else {
    res.status(400);
    res.render("join", { title: "Join" });
  }
};

export const getLogin = (req, res) => res.render("login", { title: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => res.redirect(routes.home);

export const userDetail = (req, res) =>
  res.render("userDetail", { title: "User Detail", videos });

export const editProfile = (req, res) =>
  res.render("editProfile", { title: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { title: "Change Password" });
