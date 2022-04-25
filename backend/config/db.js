const mongoose = require("mongoose");
const serverlink =
  "mongodb+srv://Piyush:Piyush@piyushcluster.cfb1n.mongodb.net/searchIt?";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(serverlink);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
