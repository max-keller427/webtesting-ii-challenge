import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
  render,
  fireEvent,
  queryByAltText,
  queryByText,
  getByTitle
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("The App Component", () => {});
