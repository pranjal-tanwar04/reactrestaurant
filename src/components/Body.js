import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import RestaurantCard, { withLocationLabel } from "../RestaurantCard";

// import resList from "../utils/mockData"

const Body = () => {
  //local state variable-super powerful variable
  const [listofRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const RestrauntCardPromoted =withPromotedLabel(RestaurantCard)

  //whenever state variables update ,react triggers reconciliation cycle(re-renders the component)
  console.log("Body Rendered", listofRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //this is used to fetch data from the browsers API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline,Please check you internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  //conditional rendering
  if (!listofRestaurants || listofRestaurants.length === 0) {
    return <Shimmer />;
  }
  // if (!listofRestaurants) return <Shimmer />; 
  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="bg-gray-300 border-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg shadow-lg hover:bg-green-200"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurants = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/Restaurant/" + restaurant.info.id}
          >
            {/* { /** if the restaurant is promoted then add a promoted label to it */
            /**  restaurant.data.promoted ?(<RestrauntCardPromoted resData={restaurant}/> 

            ):( 
            <RestaurantCard resData={restaurant} />
          ) };*/}

            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
