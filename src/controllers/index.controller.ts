import { NextFunction, Request, Response } from 'express';

export class UserController {

  public test = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({test: "test"});
    } catch (error) {
      next(error);
    }
  };

}
