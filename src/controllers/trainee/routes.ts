import { schema } from "./schema";
import {  checkSchema } from "express-validator/check";
import * as express from "express";
import TraineeController from "./controller";
import { validation } from "./validation";

let traineeRouter = express.Router();

traineeRouter.get("/post", checkSchema(schema.get), validation(), TraineeController.get);
traineeRouter.post("/post", checkSchema(schema.create), validation(), TraineeController.post);
traineeRouter.put("/post", checkSchema(schema.update), validation(), TraineeController.put);
traineeRouter.delete("/post", checkSchema(schema.delete), validation(), TraineeController.delete);



export default traineeRouter;
