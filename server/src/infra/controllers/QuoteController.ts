import { Request, Response } from 'express';
import { CreateQuoteService } from '../../modules/services/CreateQuoteService';

export class QuoteController {
  private readonly createQuoteService: CreateQuoteService =
    new CreateQuoteService();

  store = async (request: Request, response: Response): Promise<Response> => {
    const {
      amountPeople,
      departDate,
      destination,
      from,
      name,
      retureDate,
      transportId,
    } = request.body;

    try {
      await this.createQuoteService.handle({
        amountPeople: Number(amountPeople),
        retureDate: new Date(retureDate),
        departDate: new Date(departDate),
        destination,
        from,
        name,
        transportId,
      });
      return response.status(201).json(null);
    } catch (error) {
      console.error(error);
      return response.status(400).json();
    }
  };
}
