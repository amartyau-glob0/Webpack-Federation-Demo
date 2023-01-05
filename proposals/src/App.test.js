import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Proposals has been successfully loaded in remotely./i);
  expect(linkElement).toBeInTheDocument();
});
