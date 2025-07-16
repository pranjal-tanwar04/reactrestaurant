// components/ItemList.js
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const isVeg = item?.isVeg === 1;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
         data-testid="foodItems">
      <div className="w-9/12">
        <li className="font-bold p-2 list-none">
          {isVeg ? "🟢" : "🔴"} {item.name} - ₹
          {(item.price || item.defaultPrice) / 100}
        </li>
        <li className="text-sm text-gray-600 list-none">{item.description}</li>
      </div>

      {item.imageId && (
        <div className="w-2/12 p-4 relative">
          <button
            className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg cursor-pointer absolute"
            onClick={handleAddItem}
          >
            Add+
          </button>
          <img
            src={CDN_URL + item.imageId}
            alt={item.name}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default ItemList;

