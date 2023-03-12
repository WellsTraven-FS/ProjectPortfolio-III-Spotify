const express = require("express");
const dotifyRouter = express.Router();
const dotifyController = require("../controllers/dotify");

dotifyRouter.get("/login", dotifyController.login);
dotifyRouter.get("/auth", dotifyController.jwt, dotify.auth);
dotifyRouter.get("/token", dotifyController.jwt, dotify.status);
dotifyRouter.get("/status", dotifyController.jwt, dotifyController.status);
dotifyRouter.get("/search", dotifyController.jwt, dotifyController.status);

module.exports = dotifyRouter;
