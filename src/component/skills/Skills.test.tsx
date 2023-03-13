import { logRoles, render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"]
  test("renders correctly", () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole("listitem")
    expect(listItemElements).toHaveLength(skills.length)
  })
  test("renders login button", () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole("button", {
      name: "Login",
    })
    expect(loginButton).toBeInTheDocument()
  })
  //*for not in dom we do queryByRole
  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })
  //*after some time display not displayed:findBy & findAllBy:default time 1000ms
  test("Start Learning button is eventually displayed", async () => {
    //*another way of debug if in case anything not working
    /**
     const view = render(<Skills skills={skills} />);
     logRoles(view.container);
     */
    render(<Skills skills={skills} />)
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    )
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument()
  })
})
