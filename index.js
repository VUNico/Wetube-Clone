import express from "express";
const app = express();
const PORT = 4000;

const handleHome = (req, res) => res.send("Hello I am at home!");

const handleProfile = (req, res) => res.send("This is your profile.");

/* It is called middleware */
const handleMiddle = (req, res, next) => {
  console.log("Between");
  next();
};

const handleListening = () =>
  console.log("Listening on: http://localhost:4000");

app.get("/", handleHome);

app.use(handleMiddle);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
