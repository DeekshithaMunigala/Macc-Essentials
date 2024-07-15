import paymentImage from "../assets/payment.png";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

const Payment = () => {
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[1268px] h-[597px] flex justify-between items-center mx-auto my-20 z-0">
      <div className="w-[612px] h-[594px]">
        <h1 className="font-bold text-3xl uppercase tracking-wider">payment</h1>

        <div className="w-[607px] h-[197px] flex flex-col justify-start mt-3">
          <div className="flex items-center border border-gray-400 px-5 border-b-0">
            <input type="radio" name="Bitcoin" className="h-[50px] mr-5" />
            <label className="text-lg font-normal">Bitcoin</label>
          </div>

          <div className="flex items-center border border-gray-400 px-5 border-b-0">
            <input type="radio" name="Apple wallet" className="h-[50px] mr-5" />
            <label className="text-lg font-normal">Apple wallet</label>
          </div>

          <div className="flex items-center border border-gray-400 px-5 border-b-0">
            <input type="radio" name="Paypal" className="h-[50px] mr-5" />
            <label className="text-lg font-normal">Paypal</label>
          </div>

          <div className="flex items-center border border-gray-400 px-5">
            <input
              type="radio"
              name="Debit / Credit Card"
              className="h-[50px] mr-5"
            />
            <label className="text-lg font-normal">Debit / Credit Card</label>
          </div>
        </div>

        <div className="w-[612px] h-[225px] my-6">
          <p className="text-xl font-bold capitalize ">delivery address</p>

          <form className="w-[612px] h-[173px] mt-[22px] flex flex-col justify-between">
            <input
              type="text"
              placeholder="4568 8465 1258 6895"
              className="w-[100%] h-[45px] border border-gray-400 px-3 text-xl outline-0"
            />

            <input
              type="text"
              placeholder="John Wick"
              className="w-[100%] h-[45px] border border-gray-400 px-3 text-xl outline-0"
            />

            <div className="flex justify-between">
              <input
                type="text"
                placeholder="12/24"
                className="w-[295px] h-[45px] border border-gray-400 px-3 text-xl outline-0"
              />
              <input
                type="text"
                placeholder="584"
                className="w-[295px] h-[45px] border border-gray-400 px-3 text-xl outline-0"
              />
            </div>
          </form>

          <div className="flex justify-between items-center mt-16">
            <Link to="/checkout">
              <button className="flex items-center ">
                <IoIosArrowBack className="mr-3" /> Go back to checkout
              </button>
            </Link>

            <button
              className="w-[296px] h-[45px] text-white rounded-md bg-red-600 font-bold capitalize text-2xl"
              onClick={handlePayButtonClick}
            >
              <Link to="/payment">Pay ₹ {totalAmount}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[597px] h-[596px]">
        <img src={paymentImage} alt="checkout" />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Payment;
