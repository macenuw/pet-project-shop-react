import { useState } from "react";
import { NavLink } from "react-router-dom";
import colorsMap from "../../colorsMap";
import sizeMap from "../../sizeMap";
import "./product.scss";
const Product = (props) => {
  const [productAmount, setProductAmount] = useState(0);
  const [noticeShow, setNoticeShow] = useState(false);
  const changeProductAmount = (num) => {
    if (num < 0 && productAmount === 0) {
      return;
    }
    setProductAmount((productAmount) => productAmount + num);
  };
  const colorsItems = props.product.colors.map((item, index) => {
    return (
      <li className="product__colors-item" key={index}>
        <NavLink
          to={`/product/${props.product.model}/${item}`}
          style={{
            backgroundColor: `#${colorsMap[item].colorCode}`,
          }}
          className="product__color"
        ></NavLink>
      </li>
    );
  });
  const notice = noticeShow ? (
    <div className="notice">
      <p className="notice__text">
        Модель: {props.product.model}, цвет: {colorsMap[props.color].name},
        <br /> Добавлена в корзину
      </p>
    </div>
  ) : null;
  return (
    <section className="product">
      <div className="product__inner container">
        <div className="product__img-inner">
          <picture>
            <source
              srcSet={`../../images/products/${props.product.model}/${props.color}.webp`}
              type="image/webp"
            />
            <img
              src={`../../images/products/${props.product.model}/${props.color}.jpg`}
              alt={`${props.product.name} ${props.product.model}`}
              className="product__img"
            />
          </picture>
        </div>
        <div className="product__info">
          <h2 className="product__name"> {props.product.name} </h2>
          <span className="product__color-name">
            Цвет: {colorsMap[props.color].name}
          </span>
          <span className="product__size"> {sizeMap[props.product.size]} </span>
          <h3 className="product__price">
            Цена: {props.product.price} &#8372;
          </h3>
          <h3 className="product__subtitle"> Цвета: </h3>
          <ul className="product__colors"> {colorsItems} </ul>
          <p className="product__consist">
            <b> Состав: </b> {props.product.text}
          </p>
          <div className="product__amount">
            <button
              className="product__btn"
              onClick={() => {
                changeProductAmount(-1);
              }}
            >
              -
            </button>
            <input
              type="number"
              className="product__input"
              readOnly
              value={productAmount}
            />
            <button
              className="product__btn"
              onClick={() => {
                changeProductAmount(1);
              }}
            >
              +
            </button>
          </div>
          <button
            className="product__add-btn button"
            onClick={() => {
              if (productAmount > 0) {
                props.addToCart(
                  props.product.model,
                  props.color,
                  productAmount,
                  props.product.price,
                  props.product.size,
                  props.product.name
                );
                setNoticeShow(true);
                setTimeout(() => {
                  setNoticeShow(false);
                }, 1000);
                setProductAmount(0);
              }
            }}
          >
            В корзину
          </button>
        </div>
      </div>
      {notice}
    </section>
  );
};
export default Product;
