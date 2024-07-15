import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import useProductByCategory from "../hooks/useProductByCategory";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const NewProducts = () => {
  useProductByCategory();
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
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <div className="my-28">
      <div className=" text-center">
        <h1 className="text-4xl uppercase font-bold">
          <span className="text-red-600">New</span>{" "}
          <span className="text-blue-800">products</span>
        </h1>
      </div>

      <div className="w-[90%] mx-auto">
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

export default NewProducts;
