// Import & Execute
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Import routes
const loginRoute = require("./routes/posts");

// Middlewares (examples can be checking authentication)
app.use("/login", loginRoute);
// app.use("/login", () => {
//   console.log("Middleware running");
// });

// Routes (use patch:update delete:deleting get:to get info post:to give the info)
app.get("/", (req, res) => {
  res.send("This will be index");
});

// DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB connecetion made")
);

// Listen

app.listen(3000);
