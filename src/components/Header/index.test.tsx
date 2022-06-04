import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
