const express = require("express");
const UserController = require("../controller/users.controller");

const usersRouter = express.Router();

usersRouter.get("/", UserController.getAllUsers);
usersRouter.post("/:uUname", UserController.getAUser);
usersRouter.post("/", UserController.addNewUser);
usersRouter.put("/", UserController.updateUserInfo);

module.exports = usersRouter;
