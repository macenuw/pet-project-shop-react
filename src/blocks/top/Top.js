import { NavLink } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import { TopProduct } from "../../control";
import "./top.scss";
const Top = (props) => {
  let items = TopProduct.map((product) => {
    return (
      <ProductCard
        product={product}
        className={"top__product-card"}
        key={product.model}
      />
    );
  });
  const link = props.link ? (
    <NavLink to="/catalog/all" className="top__link decor">
      Смотреть больше
    </NavLink>
  ) : null;
  return (
    <section className="top">
      <div className="top__inner container">
        <h2 className="top__title title"> Топ продаж </h2>
        <div className="top__items"> {items} </div>
        {link}
      </div>
    </section>
  );
};
export default Top;
