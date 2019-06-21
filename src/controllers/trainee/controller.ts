import { Request, Response } from 'express';
class TraineeController {
  public get(req: Request, res: Response) {
    res.send('get method called');
  }

  public post(req: Request, res: Response) {
    const { id, name, email } = req.body ;
    console.log(`ID: ${id}, Name: ${name}, Email: ${email}`);
    res.send("post method called");
  }

  public put(req: Request, res: Response) {
    res.send('put method called');
  }

  public delete(req: Request, res: Response) {
    res.send('delete method called');
  }
}
export default new TraineeController();
