import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsList from './ProductsList';

describe('ProductsList', () => {
  const mockOnClickFunction = jest.fn();

  afterEach(cleanup);

  it('renders all products', async () => {
    const products = [
      { id: 1, name: 'test name 1', description: 'test description 1', price: 4.21 },
      { id: 2, name: 'test name 2', description: 'test description 2', price: 0.78 }
    ];
    const { getByText } = render(
      <ProductsList products={products} deleteProduct={mockOnClickFunction} />
    );

    // using map to test over each product, no return value needed
    // eslint-disable-next-line array-callback-return
    products.map(product => {
      expect(getByText(product.name)).toBeTruthy();
    });
  });
});
