const express = require("express");
const User = require("../models").User;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render("sequelize", { users });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
