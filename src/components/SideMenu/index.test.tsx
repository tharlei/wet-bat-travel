import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { SideMenu } from '.';

describe('SideMenu component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SideMenu />);
    expect(asFragment()).toMatchSnapshot();
  });
});
