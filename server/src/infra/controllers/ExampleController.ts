import { Request, Response } from 'express';

export class ExampleController {
  async index(request: Request, response: Response): Promise<Response> {
    return response.status(200).json([]);
  }
}
