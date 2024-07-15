import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import CartItem from "./CartItems";
import { FaList } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const totalAmount = useSelector((store) => store.cart.totalAmount);
  console.log(totalAmount);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="m-5 p-5 mb-32">
      <h1 className="font-bold uppercase text-2xl tracking-wider text-center">
        My Cart
      </h1>

      <div className="lg:w-6/12 sm:w-full mx-auto m-2 p-2 relative">
        {(cartItems || []).map((detail) => (
          <CartItem detail={detail} key={detail.asin} />
        ))}

        {cartItems.length === 0 ? (
          <h1 className="text-xl tracking-wider text-center">
            Your cart is empty. Add items to your cart :)
          </h1>
        ) : (
          <div className="px-4 mt-16">
            <h1 className="left-0 font-bold tracking-wide border-b-2 border-gray-100 pb-2">
              Bill Details
            </h1>

            <div className="flex justify-between items-center font-semibold my-1">
              <p className="flex items-center">
                <FaList className="mr-2 text-sm" />
                Total Items :{" "}
              </p>
              <p>
                {cartItems.length} {cartItems.length === 1 ? `Item` : `Items`}
              </p>
            </div>

            <div>
              <p className="flex justify-between items-center font-semibold my-1">
                Total Amount :
                <div>
                  <span className="mr-1">&#8377;</span>
                  {totalAmount}
                </div>
              </p>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                className="hover:bg-red-600 w-[150px] h-[35px] text-white rounded-md bg-red-600 font-semibold capitalize text-xl "
                onClick={handleClearCart}
              >
                {cartItems.length === 1 ? `Clear Item` : `Clear Items`}
              </button>
              <button className=" hover:bg-red-600 w-[150px] h-[35px] text-white rounded-md bg-red-600 font-semibold capitalize text-xl">
                <Link to="/checkout">Check out</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
