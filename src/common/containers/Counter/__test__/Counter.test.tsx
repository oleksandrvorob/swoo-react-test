import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../../App';

describe("Test Counter Component", () => {

  it("Render with Counter Up button", async () => {
    render(<App />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const counterUpButton = await screen.findByTestId("counterUp")
    expect(counterUpButton).toHaveTextContent("1")
  })

  it("Render with Counter Down button", async () => {
    render(<App />);
    const counterDownButton = await screen.findByTestId("counterDown")
    expect(counterDownButton).toHaveTextContent("-1")
  })

  it("Render with zero view Count", async () => {
    render(<App />)
    const counterView = await screen.findByTestId("counter")
    expect(counterView).toHaveTextContent('0')
  })

  it("Click on Counter Up Button", async () => {
    render(<App />)
    const counterUpButton = await screen.findByTestId("counterUp")
    userEvent.click(counterUpButton)
    const counterView = await screen.findByTestId("counter")
    expect(counterView).toHaveTextContent('1')
  })

  it("Click on Counter Down Button", async () => {
    render(<App />)
    const counterDownButton = await screen.findByTestId("counterDown")
    userEvent.click(counterDownButton)
    const counterView = await screen.findByTestId("counter")
    expect(counterView).toHaveTextContent('0')
  })

})
