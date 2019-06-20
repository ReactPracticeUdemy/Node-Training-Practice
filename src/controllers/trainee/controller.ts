import * as express from 'express';
import { Request, Response } from 'express';
class TraineeController {
  public get(req: Request, res: Response) {
    res.send('get method called');
  }

  public post(req: express.Request, res: express.Response) {
    //const { id, name, email } = req.body ;
    let id = req.body.id;
    // let name = req.body.name;
    // let email = req.body.email;
    console.log('Function called');

    // console.log(`ID: ${id}, Name: ${name}, Email: ${email}`);

    res.send("post method called", id);
  }

  public put(req: Request, res: Response) {
    res.send('put method called');
  }

  public delete(req: Request, res: Response) {
    res.send('delete method called');
  }
}
export default new TraineeController();
