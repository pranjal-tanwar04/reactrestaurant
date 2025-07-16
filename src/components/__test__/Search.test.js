import MOCK_DATA from "../mocks/resCardMock.json";
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";


global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json:() =>{
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("it should render the body component with search button", async () => {
  await act(async()=>
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(20);

  // const searchButton = await screen.findByRole("button", { name: /Search/i });
  // const searchInput = screen.getByTestId("searchInput");

  // fireEvent.change(searchInput, { target: { value: "burger" } });
  // fireEvent.click(searchButton);

  // const cards = screen.findAllByTestId("resCard");
  // expect(cards.length).toBe(4); 
});
