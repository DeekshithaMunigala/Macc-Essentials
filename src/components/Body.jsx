import Header from "./Header";
import NewProducts from "./NewProducts";
import MaccWeeklyDiscount from "./MaccWeeklyDiscount";
import MaccTopSelling from "./MaccTopSelling";

const Body = () => {
  return (
    <div>
      <Header />
      <NewProducts />
      <MaccWeeklyDiscount />
      <MaccTopSelling />
    </div>
  );
};

export default Body;
