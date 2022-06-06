import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Home } from '.';
import { API } from '../../infra/api';

vi.spyOn(API, 'get').mockResolvedValue([]);

describe('Home page', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
