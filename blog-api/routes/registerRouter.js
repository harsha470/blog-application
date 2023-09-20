const express = require("express");
const router = express.Router();
const userController = require("../src/user/userController");
const { body } = require("express-validator");

router.post(
  "/",
  body("firstName").not().trim().isEmpty().withMessage("First name is required"),
  body("lastName").not().trim().isEmpty().withMessage("Last name is required"),
  body("email").not().trim().isEmpty().withMessage("Email is required"),
  body("email").trim().isEmail().withMessage("Email is not valid"),
  body("password").not().trim().isEmpty().withMessage("Password is required"),
  userController.createUserControllerFn
);

module.exports = router;
