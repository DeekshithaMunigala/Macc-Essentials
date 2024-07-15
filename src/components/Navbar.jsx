import PromotionSnap from "./PromotionSnap";
import searchImage from "../assets/search.png";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile-img.png";
import likeImage from "../assets/like-img.png";
import shoppingImage from "../assets/shopping.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <PromotionSnap />

      <hr className="bg-gray-400 h-[1px]" />

      <div className="flex justify-between items-center h-[60px] w-full my-9 bg-[#ffffff] px-[4%]">
        <img src={searchImage} alt="" className="h-[22px] w-[22px] mr-24" />

        <ul className="flex justify-evenly items-center text-[20px] w-9/12 text-lg">
          <li className="uppercase mx-5">Shop</li>
          <li className="uppercase">Essentials</li>
          <li>
            <img src={logo} alt="logo" className="h-[70px] w-[149px] mx-2" />
          </li>
          <li className="uppercase">Best Sellers</li>
          <li className="uppercase">About us</li>
        </ul>

        <div className="flex items-center relative">
          <img
            src={profileImage}
            alt="profile-img"
            className="h-[22px] w-[22px] mx-4"
          />
          <img
            src={likeImage}
            alt="like-img"
            className="h-[50px] w-[27px] mx-4 mb-6"
          />
          <Link to="/cart">
            <img
              src={shoppingImage}
              alt="shopping"
              className="h-[22px] w-[22px] mx-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
