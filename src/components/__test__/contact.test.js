import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//just for grouping test cases and can also have multiple descrube block and also can have describeunder describe block.
//instead of test we can write (it) also
describe("contact us page test case", () => {
  it("should loading contact us component", () => {
    render(<Contact />);
    const heading = screen.getByText("CONTACT US 📲");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });
  test("should load button inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("message");
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contacvt component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);
    //assertion
    expect(inputBoxes.length).toBeTruthy();
  });
});
