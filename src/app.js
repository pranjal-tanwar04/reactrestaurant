import React,{ lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ItemList from "./components/ItemList"; 
import Cart from "./components/Cart.js";

// import Grocery from "./components/Grocery.js";

//chunking
//codes splitting
//Dynamic bundling
//Lazy loading
//on demand loading

const Grocery = lazy(() => import("./components/Grocery.js"));
const about = lazy(() => import("./components/About.js"));

const Applayout = () => {
  //authentication code written
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make Api calls and send user name and password
    const data = {
      name: "Pranjal Tanwar",
    };
    setUserName(data.name);
  }, []);

  return (
     <Provider store={appStore}>
    //default
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser:"Elon Musk"}}>
          <Header />
          </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
