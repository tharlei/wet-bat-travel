import { AxiosInstance } from 'axios';
import { API } from '../infra/api';
import cogoToast from 'cogo-toast';

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
    try {
      await this.api.post('/quotes', input);
      cogoToast.success('Quote created success!', {
        position: 'bottom-center',
      });
    } catch (error) {
      cogoToast.error('Please, try again later to create quote :(', {
        position: 'bottom-center',
      });
    }
  }
}
