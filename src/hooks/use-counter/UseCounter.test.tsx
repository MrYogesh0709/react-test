import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useCounter } from "./UseCounter"

describe("useCounter", () => {
  test("should render initial count", () => {
    // * hook can not be render so renderHook because it does not return jsx
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test("should accept and render same render count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    })
    expect(result.current.count).toBe(10)
  })

  test("should increment a count", () => {
    const { result } = renderHook(useCounter)
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  test("should decrement a count", () => {
    const { result } = renderHook(useCounter)
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
  })
})
