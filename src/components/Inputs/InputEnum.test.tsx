import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { InputEnum } from './InputEnum';

describe('InputEnum component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputEnum setValue={(value) => value} label="Test" options={[]} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
