import { TransportRepository } from '../../infra/repositories/TransportRepository';

interface CreateQuoteServiceData {
  id: string;
  name: string;
}

export class ListTransportQuery {
  private readonly transportRepository: TransportRepository =
    new TransportRepository();

  async handle(): Promise<CreateQuoteServiceData[]> {
    const transportModels = await this.transportRepository.model().find();

    return transportModels.map((transportModel) => ({
      id: transportModel.id,
      name: transportModel.name,
    }));
  }
}
