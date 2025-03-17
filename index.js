const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("data");
  res.send("Hello World js");
});

app.listen(port, () => {
  console.log("Your application running on port " + port);
});
