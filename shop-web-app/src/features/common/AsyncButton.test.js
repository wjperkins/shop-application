import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import AsyncButton from './AsyncButton';

describe('AsyncButton', () => {
  const mockOnClickFunction = jest.fn();

  afterEach(cleanup);

  it('contains an enabled button when not loading', () => {
    const async = { loading: false };
    const { getByText } = render(
      <AsyncButton label="Test Button" onClickFunction={mockOnClickFunction} async={async} />
    );

    const button = getByText('Test Button');
    expect(button).toBeEnabled();
  });

  it('contains an disabled button and a spinner when loading', () => {
    const async = { loading: true };
    const { getByText, getByTestId } = render(
      <AsyncButton label="Test Button" onClickFunction={mockOnClickFunction} async={async} />
    );

    const button = getByText('Test Button');
    expect(button).toBeDisabled();

    const spinner = getByTestId('loading-spinner');
    expect(spinner).toBeTruthy();
  });

  it('calls click function when button clicked', () => {
    const async = { loading: false };
    const { getByText } = render(
      <AsyncButton label="Test Button" onClickFunction={mockOnClickFunction} async={async} />
    );

    expect(mockOnClickFunction.mock.calls.length).toBe(0);

    const button = getByText('Test Button');
    fireEvent.click(button);

    expect(mockOnClickFunction.mock.calls.length).toBe(1);
  });
});
