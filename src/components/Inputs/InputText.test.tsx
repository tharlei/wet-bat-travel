import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { InputText } from './InputText';

describe('InputText component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputText setValue={(value) => value} label="Test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
