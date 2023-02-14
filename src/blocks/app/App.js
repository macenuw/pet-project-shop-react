import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  CatalogPage,
  ProductPage,
  ErrorPage,
  OrderPage,
} from "../../pages";
import Header from "../header/Header";
import Cart from "../cart/Cart";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
const App = () => {
  const [cartModal, setCartModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [order, setorder] = useState({});
  const [total, setTotal] = useState(0);
  useEffect(() => {
    totalCost();
  }, [order]);
  const onCartClick = () => {
    setCartModal((cartModal) => (cartModal = !cartModal));
  };
  const onContactClick = () => {
    setContactModal((contactModal) => (contactModal = !contactModal));
  };
  const addToCart = (model, color, amount, price, size, name) => {
    const preOrder = JSON.parse(JSON.stringify(order));
    if (!preOrder[model]) {
      preOrder[model] = {};
    }
    if (!preOrder[model][color]) {
      preOrder[model][[color]] = amount;
    } else {
      preOrder[model][[color]] = amount;
    }
    if (!preOrder[model].info) {
      preOrder[model].info = {
        price,
        size,
        name,
      };
    }
    setorder((order) => preOrder);
  };
  const deleteColor = (model, color) => {
    const preOrder = JSON.parse(JSON.stringify(order));
    if (preOrder[model][color]) {
      delete preOrder[model][color];
    }
    if (Object.keys(preOrder[model]).length === 1) {
      delete preOrder[model];
    }
    console.log(preOrder);
    setorder((order) => preOrder);
  };
  const totalCost = () => {
    let total = 0;
    const modelsArr = Object.keys(order);
    modelsArr.map((model) => {
      const colorArr = Object.keys(order[model]);
      return colorArr.map((color) => {
        if (color !== "info") {
          total += +order[model][color] * +order[model].info.price;
        }
      });
    });
    setTotal(total);
  };
  // if (cartModal || contactModal) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "";
  // }
  return (
    <Router>
      <div className="app">
        <Header onCartClick={onCartClick} onContactClick={onContactClick} />{" "}
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />{" "}
            <Route path="/catalog/:season" element={<CatalogPage />} />{" "}
            <Route
              exact
              path="/product/:model/:color"
              element={<ProductPage addToCart={addToCart} />}
            ></Route>{" "}
            <Route
              exact
              path="/order"
              element={
                <OrderPage
                  total={total}
                  order={order}
                  zeroedOrder={() => {
                    setorder({});
                  }}
                />
              }
            ></Route>{" "}
            <Route path="*" element={<ErrorPage />}>
              {" "}
            </Route>{" "}
          </Routes>{" "}
        </main>{" "}
        <Footer />
        <Cart
          onCartClick={onCartClick}
          order={order}
          addToCart={addToCart}
          deleteColor={deleteColor}
          total={total}
          cartModal={cartModal}
        />{" "}
        <Contact onContactClick={onContactClick} contactModal={contactModal} />{" "}
      </div>{" "}
    </Router>
  );
};
export default App;
