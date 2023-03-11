/*
 *Greet Should render the text hello and if a name is passed into the competent it should render the hello follow by name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  // *instead of test can use it
  it("Greet renders correctly", () => {
    render(<Greet />);
    const testElement = screen.getByText("Hello");
    expect(testElement).toBeInTheDocument();
  });
  describe("Nested", () => {
    //*fit for test.only
    // fit("Greet renders with a name", () => {
    //*xit for test.skip
    // xit("Greet renders with a name", () => {
    it("Greet renders with a name", () => {
      render(<Greet name="Yogesh" />);
      const testElement = screen.getByText("Hello Yogesh");
      expect(testElement).toBeInTheDocument();
    });
  });
});
