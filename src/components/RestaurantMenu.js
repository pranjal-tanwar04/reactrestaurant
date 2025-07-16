import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const dummy = "Dummy Data";

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null); // ✅ keep track of open accordion index

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(MENU_API(resId));
        const json = await response.json();
        setResInfo(json);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenu();
  }, [resId]);

  if (!resInfo) return <Shimmer />;

  const cardInfo = resInfo?.data?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;

  const categories = resInfo?.data?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
      c?.card?.card?.["@type"]?.includes("ItemCategory")
    );

  if (!cardInfo || !categories) return <Shimmer />;

  const { name, cuisines } = cardInfo;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-3xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")}</p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category.card.card}
          showItems={index === showIndex} 
          
         //again close logic
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }

          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

