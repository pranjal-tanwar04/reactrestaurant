import { useState } from "react";
import ItemList from "./ItemList"; // ✅ Correct casing

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex, dummy } = props;

  const handleClick = () => {
    setShowIndex(); // toggles accordion (logic in parent)
  };

  return (
    <div className="w-9/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
      {/* Header */}
      <div
        className="flex justify-between items-center font-bold cursor-pointer"
        onClick={handleClick}
      >
        <span>{data?.title}</span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {/* Accordion Body */}
      {showItems && (
        <ul className="mt-2">
          {data?.itemCards?.map((item) => {
            const info = item.card.info;
            return <ItemList key={info.id} item={info} dummy={dummy} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
