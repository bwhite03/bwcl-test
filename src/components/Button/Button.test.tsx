import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should render correctly', () => {
    const { container } = render(<Button label="Click Me" />);
    expect(container).toMatchSnapshot();
  });
});
