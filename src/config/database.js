import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

// Test database
dotenv.config();
const URI = process.env.MONGODB_URI;


export const initializeDatabase = (callback) => {
  const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  };

  try {
    mongoose.connect(URI, options).then(
      () => {
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!"
        );
      },
      (err) => {
        console.log(err);
      }
    );
  } catch {
    console.log("Close");
    callback(err);
  }
};
