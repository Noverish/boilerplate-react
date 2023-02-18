import React from 'react';
import { render, screen } from '@testing-library/react';
import CounterPage from './CounterPage';

test('renders learn react link', () => {
  render(<CounterPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
