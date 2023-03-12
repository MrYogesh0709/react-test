/*
 *Greet Should render the text hello and if a name is passed into the competent it should render the hello follow by name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

//Group Test:we can also use .only & .skip
describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const testElement = screen.getByText("Hello");
    expect(testElement).toBeInTheDocument();
  });
  //or we can have nested describe
  // describe("Nested", () => {
  //   test("Greet renders with a name", () => {
  //     render(<Greet name="Yogesh" />);
  //     const testElement = screen.getByText("Hello Yogesh");
  //     expect(testElement).toBeInTheDocument();
  //   });
  // });

  // test("Greet renders with a name", () => {
  //   render(<Greet name="Yogesh" />);
  //   const testElement = screen.getByText("Hello Yogesh");
  //   expect(testElement).toBeInTheDocument();
  // });
});
//*or we can have multiple describe means Group of test
//*Terminal:Test Suites means one file means one  Test Suites

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const testElement = screen.getByText("Hello");
//   expect(testElement).toBeInTheDocument();
// });

//with TDD:Software Development Process
//Filter test with jest

//test only will test only this test
// *test.only("Greet renders with a name", () => {
//test will skip
//* test.skip("Greet renders with a name", () => {

// *test("Greet renders with a name", () => {
//   render(<Greet name="Yogesh" />);
//   const testElement = screen.getByText("Hello Yogesh");
//   expect(testElement).toBeInTheDocument();
// });
