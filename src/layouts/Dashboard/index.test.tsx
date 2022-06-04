import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Dashboard } from '.';

describe('Dashboard layout', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
