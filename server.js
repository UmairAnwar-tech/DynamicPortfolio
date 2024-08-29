const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
require("dotenv").config();

const dbConfig = require("./config/dbConfig");
const Portfolioroute = require("./routes/Portfolioroute");
app.use(express.json());
app.use("/api/portfolio", Portfolioroute);
const port = process.env.PORT || 5001;
const path=require("path");
if(process.env.NODE_ENV === "production")
{
  app.use(express.static((path.join(__dirname,"client/build"))));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
