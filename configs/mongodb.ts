import mongoose from "mongoose";
let isConnected = false;
const ConnectMongoDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("MongoDB URL not found");
  }
  if (isConnected) {
    return console.log("Already connected to mongoDB");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectMongoDB;
