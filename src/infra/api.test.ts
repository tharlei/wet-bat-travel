import { API } from './api';
import AxiosInstace from 'axios';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../config', () => ({
  VITE_API_URL: 'url',
}));

describe('API test', () => {
  it('should return instance of axios interface', () => {
    expect(API instanceof AxiosInstace).toBeTruthy;
  });

  it('should return url of config', () => {
    expect(API.getUri()).toBe('url');
  });
});
