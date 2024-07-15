import { useState } from "react";

const AllProductsProductCard = ({ data }) => {
  const {
    product_photo,
    product_title,
    product_num_offers,
    product_original_price,
  } = data;
  const [readMore, setReadMore] = useState(false);

  const conversionRate = 83.52;

  const originalPrice = product_original_price
    ? parseFloat(product_original_price.replace("$", ""))
    : "";

  const originalPriceInInr = (originalPrice * conversionRate).toFixed(2);

  return (
    <div className="wrapper relative">
      <div className="w-[320px] h-[530px] relative mx-2">
        <div className="w-[320px] h-[442px] bg-gray-100 flex justify-between items-center ">
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
            className="w-[280px] h-[280px] mix-blend-multiply mx-auto"
          />
        </div>
        <p className="text-center mt-3 font-semibold text-xl tracking-wide">
          {readMore && product_title.length <= 60
            ? product_title
            : `${product_title.substring(0, 15)}...`}
        </p>
        <p className="text-center mt-3 font-light text-xl text-gray-600 tracking-wide mr-2">
          {originalPriceInInr !== 0 ? `₹${originalPriceInInr}` : ""}
        </p>
      </div>
    </div>
  );
};

export default AllProductsProductCard;
