const express = require("express");
const fs = require("fs");
const path = require("path"); 

const app = express(); 

const PORT = 5555; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening http://localhost:" + PORT);
  });
  