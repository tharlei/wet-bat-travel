import { QuoteRepository } from '../../infra/repositories/QuoteRepository';

interface CreateQuoteServiceInput {
  from: string;
  destination: string;
  departDate: Date;
  retureDate: Date;
  amountPeople: number;
  transportId: string;
  name: string;
}

export class CreateQuoteService {
  private readonly quoteRepository: QuoteRepository = new QuoteRepository();

  async handle(input: CreateQuoteServiceInput): Promise<void> {
    await this.quoteRepository.persist(input);
  }
}
