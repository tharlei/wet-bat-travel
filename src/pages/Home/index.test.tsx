import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Home } from '.';

vi.mock('../Inputs/InputEnum', () => ({
  InputEnum: () => <select />,
}));

describe('Home page', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
