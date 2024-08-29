const mongoose = require("mongoose");
console.log(process.env.mongo_url);
mongoose.connect(process.env.mongo_url);
console.log(process.env.mongo_url);
const connection = mongoose.connection;

connection.on("error", (error) =>
  console.error("Error connecting to MongoDB:", error)
);
connection.on("connected", () => console.log("Connected to MongoDB"));
module.exports = connection;