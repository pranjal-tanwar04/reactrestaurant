import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
// import Cart from "../Cart";
import "@testing-library/jest-dom";

test("it should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginbutton = screen.getByRole("button")

  const loginbutton = screen.getByText("Login");

  expect(loginbutton).toBeInTheDocument();
});

test(" should render header component with a cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginbutton = screen.getByRole("button")

  const cartItems = screen.getByText(/🛒/);

  expect(cartItems).toBeInTheDocument();
});

test(" should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginbutton = screen.getByRole("button")

  const loginbutton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginbutton);
  const LogoutButon = screen.getByRole("button", { name: "Logout" });

  expect(loginbutton).toBeInTheDocument();
});
