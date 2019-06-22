import { Request, Response } from 'express';
import * as jwt from "jsonwebtoken";
import { configuration } from "../../config/index";

class TraineeController {
  public get(req: Request, res: Response) {
    res.send('get method called');
  }

  public post(req: Request, res: Response) {
    const { id, name, email } = req.body ;
    console.log(`ID: ${id}, Name: ${name}, Email: ${email}`);

    const token = jwt.sign({ UserID: id, name }, configuration.secret, {
      expiresIn: 60 * 60
    });
    res.send(`Token :- ${token}`);
  }

  public put(req: Request, res: Response) {
    res.send('put method called');
  }

  public delete(req: Request, res: Response) {
    res.send('delete method called');
  }
}
export default new TraineeController();
