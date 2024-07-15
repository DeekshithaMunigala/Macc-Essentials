import { useSearchParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";
import { useDispatch, useSelector } from "react-redux";
import HeartImage from "../assets/heart.png";
import ProductCard from "./ProductCard";
import { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Notification from "./Notification";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const EachProduct = () => {
  const productDetails = useSelector((store) => store.products.productDetails);
  const products = useSelector((store) => store.products.products);
  const [searchParams] = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const containerRef = useRef(null);

  const asin = searchParams.get("asin");

  const dispatch = useDispatch();

  useProductDetails(asin);

  const {
    product_photo,
    product_photos,
    product_title,
    product_original_price,
  } = productDetails;

  if (!product_photos) {
    return null;
  }

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].offsetWidth;
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleAddToCart = () => {
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);

    dispatch(addItem({ product_original_price, asin, product_photo }));
  };

  const conversionRate = 83.52;

  const originalPrice = product_original_price
    ? parseFloat(product_original_price.replace("$", ""))
    : "";

  const originalPriceInInr = (originalPrice * conversionRate).toFixed(2);

  return (
    <div>
      <Notification
        message={"Successfully added to cart."}
        visible={notificationVisible}
      />
      <div className="h-[611px] w-[100%] mt-16 mb-36">
        <div className="w-[1164px]  mx-auto flex justify-between">
          <div className="w-[634px] h-[549px] ">
            <p className="w-[238px] h-[21px] capitalize text-gray-400 tracking-wide font-normal my-5">
              home <span className="text-black mr-3">/</span> products
              <span className="text-black mx-3">/</span>
              Product
            </p>
            <div className="flex">
              <ul className="w-[120px] mx-auto  flex flex-col items-start justify-between">
                <li className="w-[100px] h-[100px]  flex items-center justify-center">
                  <img
                    src={product_photos[0]}
                    alt="product-img"
                    className="w-[80px] h-[80px]  mix-blend-multiply"
                  />
                </li>
                <li className="w-[100px] h-[100px]  flex items-center justify-center">
                  <img
                    src={product_photos[1]}
                    alt="product-img"
                    className="w-[80px] h-[80px] mix-blend-multiply"
                  />
                </li>
                <li className="w-[100px] h-[100px] flex items-center justify-center">
                  <img
                    src={product_photos[2]}
                    alt="product-img"
                    className="w-[80px] h-[80px] mix-blend-multiply"
                  />
                </li>
                <li className="w-[100px] h-[100px]  flex items-center justify-center">
                  <img
                    src={product_photos[3]}
                    alt="product-img"
                    className="w-[80px] h-[80px] mix-blend-multiply"
                  />
                </li>
              </ul>

              <div className="w-[514px] h-[514px] bg-gray-100 flex items-center justify-center">
                <img
                  src={product_photo}
                  alt="photo"
                  className="w-[450px] h-[450px] mix-blend-multiply"
                />
              </div>
            </div>
          </div>
          <div className="w-[501px] h-[529px] mt-10 ">
            <div className=" w-[501px] h-auto flex justify-between items-start pt-5 mb-3">
              <h1 className="text-lg font-bold uppercase">{product_title}</h1>
              <img
                src={HeartImage}
                alt="like"
                className="mt-2 w-[23px] h-[22px] mix-blend-multiply cursor-pointer"
              />
            </div>
            <span className="text-2xl text-red-600 font-bold">
              ₹ {originalPriceInInr}
            </span>

            <div className="w-[500px] h-[396px] mt-4">
              <button
                onClick={handleAddToCart}
                className="w-[100%] h-[45px] mb-5 text-xl font-light uppercase tracking-wide text-white bg-[#004080]"
              >
                Add to cart
              </button>
              <p className="mb-8">
                Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
                dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,
                condimentum est. Mauris arcu odio, vestibulum quis dapibus sit
                amet,
              </p>

              <select
                name="description"
                id=""
                className="border border-gray-300 text-lg  mb-5 w-[100%]  h-[45px] font-normal uppercase tracking-wide cursor-pointer"
              >
                <option value="" className="text-center tracking-wide">
                  Description
                </option>
              </select>
              <select
                name="description"
                id=""
                className="w-[100%] text-lg  border border-gray-300 mb-5 h-[45px] font-normal uppercase tracking-wide cursor-pointer"
              >
                <option value="" className=" text-center  tracking-wide">
                  return policy
                </option>
              </select>
              <select
                name="description"
                id=""
                className="w-[100%] text-lg border border-gray-300 mb-5 h-[45px] font-normal uppercase tracking-wide cursor-pointer"
              >
                <option value="" className=" text-center  tracking-wide">
                  citizen policy
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto mb-20">
        <h1 className="text-5xl tracking-wider font-bold uppercase text-center">
          You may also like
        </h1>
        <div className="relative">
          <IoIosArrowBack
            onClick={handlePrev}
            className={`absolute left-0 top-[50%] h-9 w-9 text-gray bg-white rounded-full shadow-md cursor-pointer ${
              currentIndex === 0 ? "hidden" : ""
            }`}
          />
          <div
            ref={containerRef}
            className="w-[92%] flex pt-10 px-10 overflow-x-hidden gap-4 mx-auto relative"
          >
            {products.map((product) => (
              <Link
                key={product.asin}
                to={"/product-details?asin=" + product.asin}
              >
                <ProductCard data={product} key={product.asin} />
              </Link>
            ))}
          </div>
          <IoIosArrowForward
            onClick={handleNext}
            className={`absolute ml-5 right-0 top-[50%] h-9 w-9 text-gray bg-white rounded-full shadow-md cursor-pointer ${
              currentIndex.length - 1 ? "hidden" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
