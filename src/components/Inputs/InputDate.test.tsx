import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { InputDate } from './InputDate';

describe('InputDate component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputDate setValue={(value) => value} label="Test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
