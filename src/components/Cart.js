import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-14 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-8/12 m-auto">
        <button
          className="p-1 m-1 bg-black text-white hover:bg-gray-600 cursor-pointer rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-bold m-10 p-10 text-2xl">
            {" "}
            OOPS ....CART IS EMPTY ADD ITEMS AND ORDER NOW!!!
          </h1>
        )}
        {cartItems.map((item, index) => (
          <ItemList key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
