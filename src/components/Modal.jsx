import orderSuccessfulImage from "../assets/order-placed.png";
import crossImage from "../assets/into.png";
import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {
  return (
    <>
      <div className="bg-white fixed inset-0 w-[562px] h-[649px] mt-10 flex justify-center items-start z-50 mx-auto">
        <div className="bg-white w-[562px] h-[360px]">
          <img
            src={orderSuccessfulImage}
            alt="order-placed-img"
            className="mx-auto relative"
          />
          <div className="absolute top-10 right-10 w-[44px] h-[44px] rounded-full bg-gray-300 items-center flex justify-center">
            <img
              src={crossImage}
              alt="cross-img"
              className="w-[22px] h-[22px]"
              onClick={onClose}
            />
          </div>
          <div className="w-[374px] h-[229px] mx-auto text-center mt-6">
            <p className="text-3xl font-bold text-gray-700">
              Order Placed Successfully
            </p>

            <p className="font-light tracking-wide w-[288px] mx-auto my-5">
              Your Order Has Been Placed Successfull We'll Try To Ship It To
              Your Door Step As Soon We Can. Cheers
            </p>

            <button className="w-[272px] h-[40px] uppercase font-light text-lg bg-[#004080] rounded-md text-white mt-10">
              <Link to="/allproducts">Continue shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
