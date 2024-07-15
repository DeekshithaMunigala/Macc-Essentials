import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DiscountProductCards = ({ data }) => {
  const {
    product_photo,
    product_original_price,
    product_minimum_offer_price,
    product_title,
    product_num_offers,
  } = data;
  const [readMore, setReadMore] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 1], [0.6, 1]);

  const conversionRate = 83.52;

  const originalPrice = product_original_price
    ? parseFloat(product_original_price.replace("$", ""))
    : "";
  const offerPrice = product_minimum_offer_price
    ? parseFloat(product_minimum_offer_price.replace("$", ""))
    : "";

  const originalPriceInInr = (originalPrice * conversionRate).toFixed(2);
  const offerPriceInInr = (offerPrice * conversionRate).toFixed(2);

  return (
    <div className="wrapper relative">
      <div className="w-[320px] h-[530px] relative">
        <motion.div
          className="w-[320px] h-[441px] bg-gray-100 flex justify-center items-center "
          style={{ scale }}
        >
          {product_num_offers ? (
            <h1 className=" absolute top-0 right-0 bg-red-600 font-xl font-normal tracking-wide text-[#ffffff] py-1 px-4 uppercase">
              {product_num_offers}% OFF
            </h1>
          ) : (
            ""
          )}
          <img
            src={product_photo}
            alt={product_title}
            className="w-[240px] h-[240px] mix-blend-multiply"
          />
        </motion.div>

        <div>
          <p className="text-center mt-4 font-semibold text-xl tracking-wide">
            {readMore && product_title.length <= 60
              ? product_title
              : `${product_title.substring(0, 15)}...`}
          </p>
          <div className="flex items-center text-center justify-center">
            <p className=" line-through text-center mt-3 font-light text-xl text-gray-600 tracking-wide mr-2">
              {originalPriceInInr !== 0 ? `₹${originalPriceInInr}` : ""}
            </p>
            <p className="text-center text-gray-600 mt-3 font-light text-xl tracking-wide">
              {offerPriceInInr !== 0 ? `₹${offerPriceInInr}` : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProductCards;
