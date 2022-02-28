const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://pizza:Dhosanjay7@cluster0.uunoo.mongodb.net/mern-pizza";

var db = mongoose.connect(
  mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(" Mongoose is connected")
);

/*mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

dbon(`erron`, () => {
  console.log(`Mongo DB Connection Failed`);
});*/

module.exports = mongoose;
