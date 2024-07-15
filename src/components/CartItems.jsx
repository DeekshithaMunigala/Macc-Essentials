import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem } from "../utils/cartSlice";

const CartItem = ({ detail }) => {
  const { asin, product_photo, product_original_price } = detail;

  const dispatch = useDispatch();

  const handleIncreaseItem = () => {
    dispatch(increaseItem({ asin, product_original_price, product_photo }));
  };

  const currentItem = useSelector((store) =>
    store.cart.items.find((item) => item.asin === asin)
  );

  const handleDecreaseItem = () => {
    dispatch(decreaseItem({ asin, product_original_price, product_photo }));
  };

  const conversionRate = 83.52;

  const originalPrice = product_original_price
    ? parseFloat(product_original_price.replace("$", ""))
    : "";

  const originalPriceInInr = (originalPrice * conversionRate).toFixed(2);

  return (
    <div
      key={asin}
      className="flex justify-between items-center p-2 m-2 pb-5 border-gray-100 text-left border-b-2"
    >
      <div className="w-3/12">
        {product_photo && (
          <img src={product_photo} className="h-[200px] w-[200px]" />
        )}
      </div>

      <div className="w-6/12 ">
        <span className="flex font-semibold">
          <span className="mr-1">&#8377;</span>
          {originalPriceInInr}
        </span>
      </div>

      <div className="w-2/12 ">
        <div className="flex justify-between font-bold bg-white border border-gray-300 py-2 px-5 rounded-lg uppercase text-green-600 shadow-lg hover:bg-gray-50">
          <span className="cursor-pointer" onClick={handleDecreaseItem}>
            -
          </span>
          <span>{currentItem.quantity || 1}</span>
          <span className="cursor-pointer" onClick={handleIncreaseItem}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
