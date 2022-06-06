import { ListTransportOptionsService } from './ListTransportOptionsService';
import { API } from '../infra/api';
import { describe, expect, it, vi } from 'vitest';

const mockTransports = {
  data: [
    {
      id: '3368776c-89b2-436f-9471-18bdc21b2eb8',
      name: 'Car',
    },
  ],
};

describe('ListTransportOptionsService test', () => {
  it('should called API one time', () => {
    vi.spyOn(API, 'get').mockResolvedValue(mockTransports);
    new ListTransportOptionsService().handle();
    expect(API.get).toBeCalledTimes(1);
  });

  it('should return option label equal response name', async () => {
    vi.spyOn(API, 'get').mockResolvedValue(mockTransports);
    const options = await new ListTransportOptionsService().handle();

    expect(options[0].label).toEqual(mockTransports.data[0].name);
  });
});
