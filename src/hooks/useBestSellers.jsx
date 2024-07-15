import { options } from "../utils/constant";

const useBestSellers = () => {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/best-sellers?type=BEST_SELLERS&page=1&";

  const fetchBestSellers = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data);
  };

  fetchBestSellers();
};

export default useBestSellers;
