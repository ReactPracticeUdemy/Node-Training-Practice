import { IConfig } from "./IConfig"
import * as dotenv from "dotenv";
dotenv.config();

export const configuration:IConfig = {
  port: process.env.PORT,
  env:  process.env.NODE_ENV,
  secret: process.env.SECRET_KEY,
  url: process.env.MONGO_URL
};

Object.freeze(configuration);
