import { Request, Response } from 'express';
import { ListTransportQuery } from '../../modules/queries/ListTransportQuery';

export class TransportController {
  private readonly listTransportQuery: ListTransportQuery =
    new ListTransportQuery();

  index = async (_request: Request, response: Response): Promise<Response> => {
    try {
      const data = await this.listTransportQuery.handle();
      return response.status(200).json(data);
    } catch (error) {
      console.error(error);
      return response.status(400).json();
    }
  };
}
