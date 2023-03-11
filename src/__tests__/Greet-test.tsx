//*fileName like __tests__ for test
import { render, screen } from "@testing-library/react";
import { Greet } from "../component/greet/Greet";
describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const testElement = screen.getByText("Hello");
    expect(testElement).toBeInTheDocument();
  });
  describe("Nested", () => {
    test("Greet renders with a name", () => {
      render(<Greet name="Yogesh" />);
      const testElement = screen.getByText("Hello Yogesh");
      expect(testElement).toBeInTheDocument();
    });
  });
});
