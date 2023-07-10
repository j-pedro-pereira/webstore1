const express = require("express");
const { login, register, checkUserExistence } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get('/check', checkUserExistence);

module.exports = userRouter;
