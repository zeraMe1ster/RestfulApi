// Import & Execute
const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("This will be index");
});

// DB

// Listen

app.listen(6969);
