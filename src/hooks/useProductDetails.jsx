import { options } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProductDetails } from "../utils/productSlice";

const useProductDetails = (asin) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=`;

    const fetchProductDetails = async () => {
      const response = await fetch(url + asin, options);
      const result = await response.json();
      console.log(result.data);
      dispatch(addProductDetails(result.data));
    };
    fetchProductDetails();
  }, []);

  return;
};

export default useProductDetails;
