const express = require("express");
const router = express.Router();
const {
  renderHome,
  addUser,
  getEdit,
  postEdit,
} = require("../controller/usercontroller");

router.get("/", renderHome);
router.post("/add", addUser);
router.get("/edit/:id", getEdit);
router.post("/edit/:id", postEdit);

module.exports = router;
