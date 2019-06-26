import React from "react";
import {
  render,
  fireEvent,
  queryByAltText,
  queryByText
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("The dashboard component", () => {
  it("renders", () => {
    const test = render(<Dashboard />);
  });

  it("shows all fields", () => {
    const { queryByText } = render(<Dashboard />);
    const balls = queryByText(/balls/i);
    const strikes = queryByText(/strikes/i);
    const fouls = queryByText(/fouls/i);
    const hits = queryByText(/hits/i);

    expect(balls).toBeInTheDocument();
    expect(strikes).toBeInTheDocument();
    expect(fouls).toBeInTheDocument();
    expect(hits).toBeInTheDocument();
  });
});
