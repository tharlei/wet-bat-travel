import { API } from './api';
import AxiosInstace from 'axios';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../config', () => ({
  API_URL: 'url',
  API_TOKEN: '123',
}));

describe('API test', () => {
  it('should return instance of axios interface', () => {
    expect(API instanceof AxiosInstace).toBeTruthy;
  });

  it('should return url of config', () => {
    expect(API.getUri()).toBe('url');
  });
});
