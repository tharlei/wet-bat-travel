import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { FormQuote } from '.';
import { API } from '../../infra/api';

vi.spyOn(API, 'get').mockResolvedValue([]);

describe('FormQuote component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<FormQuote />);
    expect(asFragment()).toMatchSnapshot();
  });
});
