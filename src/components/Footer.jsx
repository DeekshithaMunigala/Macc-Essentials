import logo from "../assets/logo.png";
import email from "../assets/email.png";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiFacebook } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-around items-start px-28 h-[390px]">
        <div className="flex items-center justify-between w-[624px] h-[122px]">
          <img src={logo} alt="logo" className="h-[122px] w-[195px]" />
          <ul className="text-2xl font-light">
            <li className="mb-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-3">Collection</li>
            <li className="mb-3">
              <Link to="/allproducts">Products</Link>{" "}
            </li>
          </ul>
          <ul className="text-2xl font-light">
            <li className="mb-3">About</li>
            <li className="mb-3">Contact</li>
            <li className="mb-3">FAQ</li>
          </ul>
        </div>

        <div className="w-[428px] h-[219px] ml-auto">
          <p className="text-xl font-light">
            Be the first to know about our biggest and best sales. We'll never
            send more than one email a month.
          </p>
          <div className="w-[428px] flex justify-between items-center py-3 border-b-2 border-black mt-10">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="font-normal tracking-wider text-lg  outline-0"
            />
            <img src={email} alt="email" className="h-[22px] w-[27px]" />
          </div>
          <ul className="w-[203px] h-[39px] flex justify-between items-center mt-5">
            <li className="rounded-full bg-[#004080] h-[38px] w-[38px] place-content-center">
              <SlSocialTwitter className=" mx-auto bg-white" />
            </li>
            <li className="rounded-full bg-[#004080] h-[38px] w-[38px] place-content-center">
              <TiSocialLinkedin className=" mx-auto bg-white" />
            </li>
            <li className="rounded-full bg-[#004080] h-[38px] w-[38px] place-content-center">
              <FiFacebook className=" mx-auto bg-white" />
            </li>
            <li className="rounded-full bg-[#004080] h-[38px] w-[38px] place-content-center">
              <SlSocialInstagram className=" mx-auto bg-white" />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xl pb-10">All rights are reserved</p>
    </div>
  );
};

export default Footer;
