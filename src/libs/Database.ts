import * as mongoose from "mongoose";
import { seedData } from "./SeedData";
class Database {
  public static open({ mongoUrl }) {
    return new Promise((resolve, reject) => {
      const options = {};
      mongoose.connect(mongoUrl, { useNewUrlParser: true });

      mongoose.connection.on("error", (err) => {
        console.log("Mongoose connection error: " + err);
        reject("Error");
      });
      mongoose.connection.on("connected", () => {
        console.log("! Database connection successfully !");
        seedData();
        resolve();
      });
    });
  }

  public static disconnect() {
    mongoose.disconnect();
  }
}

export default Database;
