const express = require("express");
const Router = express.Router();
const authControllers = require("../controllers/auth-controller");
 
Router
  .get('/me', authControllers.identity)
  .post("/signup",  authControllers.registercustomer)
  .post("/login", authControllers.login)

exports.Router = Router;