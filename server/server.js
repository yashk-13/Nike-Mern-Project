const express = require("express");
const Bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express());

  
app.get("/message", (req, res) => {
  res.send();
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));

