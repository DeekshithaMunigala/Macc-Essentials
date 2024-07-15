import checkoutImage from "../assets/checkout-img.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="w-[1268px] h-[597px] flex justify-between items-center mx-auto my-20">
      <div className="w-[612px] h-[538px]">
        <h1 className="font-bold text-3xl uppercase tracking-wider">
          Checkout
        </h1>
        <div className="w-[612px] h-[353px] my-6">
          <p className="text-xl font-bold capitalize ">delivery address</p>

          <form className="w-[612px] h-[301px] mt-[22px] flex flex-col justify-between">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="John"
                className="w-[295px] h-[45px] border border-gray-400 px-3 text-xl outline-0"
              />
              <input
                type="text"
                placeholder="wick"
                className="w-[295px] h-[45px] border border-gray-400 px-3 text-xl outline-0"
              />
            </div>

            <input
              type="text"
              placeholder="Street 32, Pasror road, Daska"
              className="w-[100%] h-[45px] border border-gray-400 px-3 text-xl outline-0"
            />

            <input
              type="text"
              placeholder="N/A"
              className="w-[100%] h-[45px] border border-gray-400 px-3 text-xl outline-0"
            />

            <div className="flex justify-between">
              <input
                type="text"
                placeholder="51010"
                className="w-[295px] h-[45px] border border-gray-400 px-3 text-xl outline-0"
              />
              <input
                type="text"
                placeholder="Sialkot"
                className="w-[295px] h-[45px] border border-gray-400 px-3 text-xl outline-0"
              />
            </div>

            <input
              type="text"
              placeholder="+923445676890"
              className="w-[100%] h-[45px] border border-gray-400 px-3 text-xl outline-0"
            />
          </form>

          <div className="flex justify-between items-center mt-20">
            <Link to="/cart">
              <button className="flex items-center ">
                <IoIosArrowBack className="mr-3" /> Go back to cart
              </button>
            </Link>

            <button className="w-[296px] h-[45px] text-white rounded-md bg-red-600 font-bold capitalize text-2xl">
              <Link to="/payment">save and continue</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[598px] h-[550px]">
        <img src={checkoutImage} alt="checkout" />
      </div>
    </div>
  );
};

export default Checkout;
