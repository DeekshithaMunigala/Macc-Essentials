import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductCard = ({ data }) => {
  const { product_photo, product_title, is_best_seller } = data;
  const [readMore, setReadMore] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  return (
    <div className="wrapper relative">
      <div className="w-[390px] h-[600px] relative">
        <motion.div
          className="w-[390px] h-[538px] bg-gray-100 flex justify-center items-center "
          style={{ scale }}
        >
          {is_best_seller === true ? (
            <h1 className=" absolute top-0 right-0 bg-red-600 font-xl font-normal tracking-wide text-[#ffffff] py-1 px-4 uppercase">
              Top Seller
            </h1>
          ) : (
            ""
          )}
          <img
            src={product_photo}
            alt={product_title}
            className="w-[280px] h-[280px] mix-blend-multiply"
          />
        </motion.div>
        <p className="text-center mt-7 font-semibold text-xl tracking-wide">
          {readMore && product_title.length <= 60
            ? product_title
            : `${product_title.substring(0, 15)}...`}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
