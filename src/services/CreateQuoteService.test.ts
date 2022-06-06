import { CreateQuoteService } from './CreateQuoteService';
import { API } from '../infra/api';
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

describe('CreateQuoteService test', () => {
  it('should called API one time', () => {
    vi.spyOn(API, 'post').mockResolvedValue(null);
    new CreateQuoteService().handle(quoteMock);
    expect(API.post).toBeCalledTimes(1);
  });
});
