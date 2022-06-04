import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { FormQuote } from '.';

vi.mock('../Inputs/InputEnum', () => ({
  InputEnum: () => <select />,
}));

describe('FormQuote component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<FormQuote />);
    expect(asFragment()).toMatchSnapshot();
  });
});
