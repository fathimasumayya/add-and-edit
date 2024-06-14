const express = require("express");
const app = express();
const path = require("path");
const router = require("./router/userRoute");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log("server is running");
});
