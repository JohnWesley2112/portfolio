import { render, screen } from '@testing-library/react';
import App from './App';

test('renders John Wesley', () => {
  render(<App />);
  const name = screen.getByText(/John Wesley/i);
  expect(name).toBeInTheDocument();
});
