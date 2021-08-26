const express = require("express");
const path = require("path");
const router = express.Router();
//Handlers

const dhashboardhandler = require("./handlers/dashboardhandler");
const loginhandler = require("./handlers/login");
const signuphandler = require("./handlers/signup");
const forget_passwordhandler = require("./handlers/forget_password");
const leadhandler = require("./handlers/lead");

//
router.get("/",dhashboardhandler.get)
router.post("/",dhashboardhandler.set)

//
router.get("/signin",loginhandler.get)
router.post("/signin",loginhandler.post)

//
router.get("/signup",signuphandler.get)
router.post("/signup",signuphandler.post)

//
router.get("/forget-password",forget_passwordhandler.get)
router.post("/forget-password",forget_passwordhandler.post)

//
router.get("/lead",leadhandler.get)
router.post("/lead",leadhandler.set)
router.post("/search",leadhandler.search)
router.get("/statistic",leadhandler.statistic)

module.exports=(router);