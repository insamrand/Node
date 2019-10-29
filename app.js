const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(request, response) {
  response.json({
    message: "Function ES5"
  });
});

app.get("/signin", (req, res) => {
  res.json({
    message: "ARROW FUNCTION ES6"
  });
});

app.get("/signin", (req, res) => res.json({ message: "SHOT ARROW FUCTION if One Line" }));

app.listen(port);
