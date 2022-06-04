import { CreateQuoteService } from './createQuoteService';
import { API } from '../infra/api';
import { AxiosError } from 'axios';
import { describe, expect, it, vi } from 'vitest';

const quoteMock = {
  departDate: '2020-01-01',
  retureDate: '2020-01-15',
  destination: 'São Paulo',
  from: 'Rio de Janeiro',
  name: 'João',
  people: 1,
  transportationId: 'cfd987dd-5185-4289-88c3-ea2a54b90192',
};

const mockError = new AxiosError('Request failed');

describe('CreateQuoteService test', () => {
  it('Should called API one time', () => {
    vi.spyOn(API, 'post').mockResolvedValue(null);

    new CreateQuoteService().handle(quoteMock);
    expect(API.post).toBeCalledTimes(1);
  });

  it('Should return error in request failed', async () => {
    vi.spyOn(API, 'post').mockRejectedValue(mockError);

    expect(new CreateQuoteService().handle(quoteMock)).rejects.toThrow(
      mockError,
    );
  });
});
