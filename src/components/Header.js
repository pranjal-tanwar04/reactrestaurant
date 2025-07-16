import { ICON_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const loggedInUser = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart?.items || []);
  console.log("Cart Items from Redux:", cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-45" alt="logo" src={ICON_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/contact">Contact us</Link></li>
          <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-lg">
            <Link to="/Cart">🛒 ({cartItems.length} Item)</Link>
          </li>
          <button
            className="border border-solid border-black px-4 h-8"
            onClick={() => {
              setBtnNameReact(prev => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-semibold">
            {loggedInUser?.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

