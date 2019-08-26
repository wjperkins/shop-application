import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product';

describe('Product', () => {
  const mockOnClickFunction = jest.fn();

  afterEach(cleanup);

  it('shows name, description and price', async () => {
    const product = { id: 1, name: 'test name', description: 'test description', price: 4.21 };
    const { getByText } = render(<Product product={product} deleteProduct={mockOnClickFunction} />);

    expect(getByText('test name')).toBeTruthy();
    expect(getByText('test description')).toBeTruthy();
    expect(getByText('£4.21')).toBeTruthy();
  });

  it('calls click function when button clicked', () => {
    const product = { id: 1, name: 'test name', description: 'test description', price: 4.21 };
    const { getByText } = render(<Product product={product} deleteProduct={mockOnClickFunction} />);

    expect(mockOnClickFunction.mock.calls.length).toBe(0);

    const button = getByText('Delete');
    fireEvent.click(button);

    expect(mockOnClickFunction.mock.calls.length).toBe(1);
  });
});
