import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('NavBar', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { container } = render(<NavBar>Hello world</NavBar>);

    expect(container).toMatchSnapshot();
  });
});
