import * as express from "express";


class Server {
  public app: express.Express;

  constructor(private config) {
    this.app = express();
  }
  bootstrap() {
    this.setupRoutes();
    return this;
  }

  setupRoutes() {
    this.app.get('/health-check', (req, res) => {
      res.send('I am ok')
    })
  }

  run() {
    this.app.listen(this.config.port, () =>
    console.log(`Example app listening on port ${this.config.port}!`));
  }
}

export default Server;
