import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from '.';
import { FaTimes } from 'react-icons/fa';

describe('Card component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Card title="Test" icon={FaTimes} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
