const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Newpage").then((result) => {
  console.log("connected successfully");
});

const userSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
