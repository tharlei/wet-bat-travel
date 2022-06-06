import { AxiosInstance } from 'axios';
import { OptionData } from '../components/Inputs/InputEnum';
import { API } from '../infra/api';
import cogoToast from 'cogo-toast';

export interface TransportData {
  id: string;
  name: string;
}

export class ListTransportOptionsService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = API;
  }

  public async handle(): Promise<OptionData[]> {
    try {
      const { data } = await this.api.get<TransportData[]>('/transports');

      return data.map((transport) => ({
        value: transport.id,
        label: transport.name,
      }));
    } catch (error) {
      cogoToast.error('Transports not loaded :(', {
        position: 'bottom-center',
      });
      return [];
    }
  }
}
