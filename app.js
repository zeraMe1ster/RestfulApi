// Import & Execute
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv/config");

app.use(bodyparser.json());

// Import routes
const loginRoute = require("./routes/posts");

// Middlewares (examples can be checking authentication)
app.use("/login", loginRoute);

// ! Elvin wale part review later
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// ? Testing
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

app.listen(3300);

// git rm --cached -f .env (Remove this from here later)
