import { AxiosInstance } from 'axios';
import { API } from '../infra/api';

interface CreateQuoteServiceInput {
  from: string;
  destination: string;
  departDate: string;
  retureDate: string;
  people: number;
  transportationId: string;
  name: string;
}

export class CreateQuoteService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = API;
  }

  public async handle(input: CreateQuoteServiceInput) {
    await this.api.post('/quotes', input);
  }
}
