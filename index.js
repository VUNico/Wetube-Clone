import express from "express";
const app = express();
const PORT = 4000;

const handleHome = (req, res) => res.send("Hello I am at home!");

const handleListening = () =>
  console.log("Listening on: http://localhost:4000");

app.get("/", handleHome);

app.listen(PORT, handleListening);
