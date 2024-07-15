import { useSelector } from "react-redux";
import allProductsImage from "../assets/all-products.png";
import { IoIosArrowDown } from "react-icons/io";
import AllProductsProductCard from "./AllProductsProductCard";
import { Link } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";

const AllProducts = () => {
  useProductDetails();
  const products = useSelector((store) => store.products.products);

  return (
    <div>
      <img
        src={allProductsImage}
        alt="cover-img"
        className="w-[100%] h-[628px] object-fill"
      />
      <div className="flex justify-between mx-20 mt-10">
        <div className="">
          <ul className="w-[300px]">
            <li className="flex justify-between items-center font-normal uppercase text-lg px-3 py-3 border-b-2">
              <p>Company</p>
              <IoIosArrowDown className="text-gray-600" />
            </li>
            <li className="flex justify-between items-center font-normal uppercase text-lg px-3 py-3 border-b-2">
              <p>price</p>
              <IoIosArrowDown className="text-gray-600" />
            </li>
            <li className="flex justify-between items-center font-normal uppercase text-lg px-3 py-3 border-b-2">
              <p>Category</p>
              <IoIosArrowDown className="text-gray-600" />
            </li>
          </ul>
        </div>
        <div className=" h-auto ">
          <div className="flex justify-between items-center mx-3">
            <p className="uppercase tracking-wide">
              {products.length} products
            </p>
            <select
              name="products"
              id="products"
              className="flex items-center mb-5 text-xl tracking-wide w-[241px] h-[50px] px-3 outline-0 border border-gray-400"
            >
              <option value="sort" className="text-xl tracking-wide">
                Sort
              </option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full h-auto mb-16">
            {products.map((product) => (
              <Link
                key={product.asin}
                to={"/product-details?asin=" + product.asin}
              >
                <AllProductsProductCard data={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
