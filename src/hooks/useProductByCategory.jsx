import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addProducts } from "../utils/productSlice";

const useProductByCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductByCategory();
  }, []);

  const url =
    "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";

  const fetchProductByCategory = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data.products);
    dispatch(addProducts(result.data.products));
  };
};

export default useProductByCategory;
