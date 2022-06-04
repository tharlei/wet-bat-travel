import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { InputNumber } from './InputNumber';

describe('InputNumber component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputNumber setValue={(value) => value} label="Test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
