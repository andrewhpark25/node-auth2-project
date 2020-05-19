const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/users-router.js");
const registerRouter = require("../register/register-router.js");
const loginRouter = require("../login/login-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use("/api/users", usersRouter);
server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
