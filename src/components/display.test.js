import React from "react";
import {
  render,
  fireEvent,
  queryByAltText,
  queryByText
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("the display component", () => {
  it("renders without crashing", () => {
    const render = render(<Display />);
  });

  it("displays strikes", () => {
    const { getByText } = render(<Display />);
    const strikes = getByText(/strikes/i);

    fireEvent.click(strikes);

    expect(strikes).toHaveTextContent(1);
  });

  it("displays balls", () => {
    const { getByText } = render(<Display />);
    const balls = getByText(/balls/i);

    fireEvent.click(balls);

    expect(balls).toHaveTextContent(1);
  });

  it("4 balls = 0 strikes", () => {
    const { getByText } = render(<Display />);
    const balls = getByText(/balls/i);
    const strikes = getByText(/strikes/i);

    fireEvent.click(balls);
    fireEvent.click(balls);
    fireEvent.click(balls);
    fireEvent.click(balls);

    expect(strikes).toHaveTextContent(0);
    expect(balls).toHaveTextContent(0);
  });

  it("3 strike = 0 strike", () => {
    const { getByText } = render(<Display />);
    const balls = getByText(/balls/i);
    const strikes = getByText(/strikes/i);

    fireEvent.click(balls);
    fireEvent.click(balls);
    fireEvent.click(balls);
    fireEvent.click(strikes);
    fireEvent.click(strikes);
    fireEvent.click(strikes);

    expect(balls).toHaveTextContent(0);
    expect(strikes).toHaveTextContent(0);
  });
});
