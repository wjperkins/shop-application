import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import AsyncWrapper from './AsyncWrapper';

describe('AsyncWrapper', () => {
  afterEach(cleanup);

  it('shows loading text when loading', () => {
    const async = { loading: true };
    const { getByText } = render(<AsyncWrapper async={async}>Hello world</AsyncWrapper>);

    expect(getByText('Loading...')).toBeTruthy();
  });

  it('shows error', () => {
    const async = { loading: false, error: { status: 404, data: 'not found' } };
    const { getByText } = render(<AsyncWrapper async={async}>Hello world</AsyncWrapper>);

    expect(getByText('404: not found')).toBeTruthy();
  });

  it('shows children', () => {
    const async = { loading: false, error: null, data: null };
    const { getByText } = render(<AsyncWrapper async={async}>Hello world</AsyncWrapper>);

    expect(getByText('Hello world')).toBeTruthy();
  });
});
