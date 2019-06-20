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
    this.setupRoutes();
    this.initBodyParser();
    return this;
  }

  setupRoutes() {
    this.app.get('/health-check', (req, res) => res.send('I am OK'));

    this.app.post('/app', (req, res) => {
      res.send('I am Fine !');
    });

    this.app.get('/check-error', (req, res) => {
      throw new Error('i am error');
    });
    this.app.use(errorHandler);
    this.app.use(notFound);
  }

  run() {
    this.app.listen(this.config.port, () => console.log(`Example app listening on port ${this.config.port}!`));
  }
}

export default Server;
