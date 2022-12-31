const mongoose = require('mongoose');

const  db = async () => {
  try {
     const conn = await mongoose.connect("mongodb+srv://sandeep431:hsr5iBzFrftDkoS3@cluster0.gqqy43z.mongodb.net/hosapi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

     console.log("MongoDB Connection Established");
  } catch (error) {
     console.log(error);
     process.exit(1);
  }
};

module.exports = db;