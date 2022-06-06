import { getRepository, Repository } from 'typeorm';
import { TransportModel } from '../models/TransportModel';
import { BaseRepository } from './Repository';

interface TransportData {
  id?: string;
  name: string;
}

export class TransportRepository implements BaseRepository {
  model = (): Repository<TransportModel> => getRepository(TransportModel);

  persist = async (transportData: TransportData): Promise<TransportData> => {
    const transportModel = this.toModel(transportData);

    const transport = await this.model().save(transportModel);

    return this.toData(transport);
  };

  delete = async (id: string): Promise<void> => {
    const transportModel = await this.model().findOne(id);

    if (!transportModel) {
      return;
    }

    await this.model().remove(transportModel);
  };

  toData = (transportModel: TransportModel): TransportData => ({
    id: transportModel.id,
    name: transportModel.name,
  });

  toModel = (transportData: TransportData): TransportModel =>
    this.model().create({
      id: transportData.id,
      name: transportData.name,
    });
}
