import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import { server } from "../../mocks/server"
import { Users } from "./Users"

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />)
    const textElement = screen.getByRole("heading", {
      name: "Users",
    })
    expect(textElement).toBeInTheDocument()
  })

  //* first create mock
  test("renders a list of users", async () => {
    render(<Users />)
    const users = await screen.findAllByRole("listitem")
    //*setUpTest or test will be fail
    expect(users).toHaveLength(3)
  })

  test("renders error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const error = await screen.findByText("Error fetching users")
    expect(error).toBeInTheDocument()
  })
})
