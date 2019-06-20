import { traineeRouter } from "./router";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { errorHandler } from './libs/routes/errorHandler';
import { notFound } from './libs/routes/notFoundRoute';

class Server {
  public app: express.Express;

  constructor(private config) {
    this.app = express();
  }

  initBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  setupRoutes() {
    this.app.use("/api", traineeRouter);

    this.app.use(notFound);
    this.app.use(errorHandler);
  }

  run() {
    this.app.listen(this.config.port, () => console.log(`Example app listening on port ${this.config.port}!`));
  }
}

export default Server;
