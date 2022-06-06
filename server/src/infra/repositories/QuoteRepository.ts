import { getRepository, Repository } from 'typeorm';
import { QuoteModel } from '../models/QuoteModel';
import { BaseRepository } from './Repository.d';

interface QuoteData {
  id?: string;
  from: string;
  destination: string;
  departDate: Date;
  retureDate: Date;
  amountPeople: number;
  transportId: string;
  name: string;
}

export class QuoteRepository implements BaseRepository {
  model = (): Repository<QuoteModel> => getRepository(QuoteModel);

  persist = async (quoteData: QuoteData): Promise<QuoteData> => {
    const quoteModel = this.toModel(quoteData);

    const quote = await this.model().save(quoteModel);

    return this.toData(quote);
  };

  delete = async (id: string): Promise<void> => {
    const quoteModel = await this.model().findOne(id);

    if (!quoteModel) {
      return;
    }

    await this.model().remove(quoteModel);
  };

  toData = (quoteModel: QuoteModel): QuoteData => ({
    id: quoteModel.id,
    from: quoteModel.from,
    destination: quoteModel.destination,
    departDate: quoteModel.depart_date,
    retureDate: quoteModel.reture_date,
    amountPeople: quoteModel.amount_people,
    transportId: quoteModel.transport_id,
    name: quoteModel.name,
  });

  toModel = (quoteData: QuoteData): QuoteModel =>
    this.model().create({
      id: quoteData.id,
      from: quoteData.from,
      destination: quoteData.destination,
      depart_date: quoteData.departDate,
      reture_date: quoteData.retureDate,
      amount_people: quoteData.amountPeople,
      transport_id: quoteData.transportId,
      name: quoteData.name,
    });
}
