// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../test-utils"
// import { AppProviders } from "../../providers/AppProviders";
import { MuiMode } from "./MuiMode"

describe("MuiMode", () => {
  test("renders text correctly", () => {
    //but we need appProvider in every component so it would be great if it's utils
    // render(<MuiMode />, {
    //   wrapper: AppProviders,
    // });
    render(<MuiMode />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toHaveTextContent("dark mode")
  })
})
