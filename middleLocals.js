import routes from "./routes";

export const middleLocals = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    isAuthenticated: true,
    name: "Nana",
    email: "historia@homeros.com",
  };
  next();
};
