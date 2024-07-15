import { useSelector } from "react-redux";
import featureImage2 from "../assets/feature-img2.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useRef } from "react";
import TopSellingProductCard from "./TopSellingProductCard";
import { Link } from "react-router-dom";

const MaccTopSelling = () => {
  const products = useSelector((store) => store.products.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  if (!products) {
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
    if (currentIndex >= 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <div className="w-[1321px] h-[673px] flex lg:flex-row sm:flex-col mb-80 ml-auto mr-5">
      <div className="w-7/12 mx-auto py-10 px-12 mb-10 h-[673px]">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl uppercase font-bold text-gray-600">
            <span className="text-red-600">Macc</span> weekly discounts
          </h1>
          <button className="uppercase bg-gray-200 py-1 px-4 font-light tracking-wide">
            <Link to="/allproducts">view all</Link>
          </button>
        </div>

        <div className="relative">
          <IoIosArrowBack
            onClick={handlePrev}
            className={`absolute left-0 top-[40%] mr-5 z-10 h-9 w-9 text-gray bg-white rounded-full shadow-md cursor-pointer ${
              currentIndex === 0 ? "hidden" : ""
            }`}
          />

          <div
            ref={containerRef}
            className="flex pt-10 overflow-x-hidden gap-7 mx-auto relative"
          >
            {products.map((product) => (
              <Link
                key={product.asin}
                to={"/product-details?asin=" + product.asin}
              >
                <TopSellingProductCard data={product} key={product.asin} />
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
      <img
        src={featureImage2}
        alt="feature-img1"
        className="w-[570px] h-[673px]"
      />
    </div>
  );
};

export default MaccTopSelling;
