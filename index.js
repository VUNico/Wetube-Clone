import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => res.send("Hello I am at home!");

const handleProfile = (req, res) => res.send("This is your profile.");

/* This is called middleware */
const handleMiddle = (req, res, next) => {
  console.log("Between");
  next();
};

const handleListening = () =>
  console.log("Listening on: http://localhost:4000");

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(handleMiddle);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
