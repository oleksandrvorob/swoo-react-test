import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App Component', () => {
  
  it('Render Counter App', async () => {
    render(<App />);
    const counterApp = screen.getByTestId('counterApp')
    expect(counterApp).toBeInTheDocument();

  });
})
