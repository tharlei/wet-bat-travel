import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Loading } from '.';

describe('Loading component', () => {
  it('should have animate spin class', () => {
    const { container } = render(<Loading />);

    const icon = container.querySelector('.animate-spin');
    expect(icon).toBeDefined();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});
