/*
 *Greet Should render the text hello and if a name is passed into the competent it should render the hello follow by name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const testElement = screen.getByText("Hello");
  expect(testElement).toBeInTheDocument();
});

//with TDD:Software Development Process
test("Greet renders with a name", () => {
  render(<Greet name="Yogesh" />);
  const testElement = screen.getByText("Hello Yogesh");
  expect(testElement).toBeInTheDocument();
});
