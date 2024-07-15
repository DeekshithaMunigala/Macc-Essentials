import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import AllProducts from "./components/AllProducts";
import EachProduct from "./components/EachProduct";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Router>
          <div className="">
            <Navbar />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="/product-details" element={<EachProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </>
  );
};

export default App;
