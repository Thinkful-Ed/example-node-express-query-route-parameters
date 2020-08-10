const express = require("express");
const morgan = require("morgan");
const app = express();

// Application-level middleware
app.use(morgan("dev"));

// Route functions
const sayHello = (req, res, next) => {
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const sayGoodbye = (req, res, next) => {
  res.send("Sorry to see you go!");
};

const saySomething = (req, res, next) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

// Routes
app.use("/hello", sayHello);
app.use("/say/goodbye", sayGoodbye);
app.use("/say/:greeting", saySomething);

module.exports = app;
