import { Router } from 'express';
import { UserController } from '@/controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';

export class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public index = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.index.test);
  }
}
