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
    const test = render(<Display />);
  });

  it("initializes all fields with 0", () => {
    const { queryByText } = render(<Display />);

    const balls = queryByText(/balls/i);
    // const strikes = getByText(/strikes/i);
    // const fouls = getByText(/fouls/i);
    // const hits = getByText(/hits/i);

    expect(balls).toEqual(0);
  });

  xit("4 balls = 0 strikes", () => {
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

  xit("3 strike = 0 strike", () => {
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
