import { NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";
import colorsMap from "../../colorsMap";
import sizeMap from "../../sizeMap";

import "./cart.scss";
const Cart = (props) => {
  const duration = 500;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    visibility: "hidden",
    transform: "translateX(200px)",
  };

  const transitionStyles = {
    entering: {
      opacity: 1,
      visibility: "visible",
      transform: "translateX(0)",
    },
    entered: {
      opacity: 1,
      visibility: "visible",
      transform: "translateX(0)",
    },
    exiting: {
      opacity: 0,
      visibility: "hidden",
      transform: "translateX(200px)",
    },
    exited: {
      opacity: 0,
      visibility: "hidden",
      transform: "translateX(200px)",
    },
  };

  const initCartItems = () => {
    const modelsArr = Object.keys(props.order);
    return modelsArr.map((model) => {
      const colorArr = Object.keys(props.order[model]);
      return colorArr.map((color) => {
        if (color !== "info") {
          return (
            <div className="cart__model" key={`${model}-${color}`}>
              <div className="cart__model-info">
                <div className="cart__img-inner">
                  <picture>
                    <source
                      srcSet={`../../images/products/${model}/${color}.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`../../images/products/${model}/${color}.jpg`}
                      alt={`${model}/${color}`}
                      className="cart__img"
                    />
                  </picture>
                </div>
                <div className="cart__info">
                  <h3 className="cart__name">{props.order[model].info.name}</h3>
                  <span className="cart__price">
                    Цена: {props.order[model].info.price} &#8372;
                  </span>
                  <span className="cart__size">
                    {sizeMap[props.order[model].info.size]}
                  </span>
                  <span className="cart__color">
                    Цвет: {colorsMap[color].name}
                  </span>
                  <div className="product__amount">
                    <button
                      className="product__btn"
                      onClick={() => {
                        props.addToCart(
                          model,
                          color,
                          props.order[model][color] - 1
                        );
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="product__input"
                      readOnly
                      value={props.order[model][color]}
                    />
                    <button
                      className="product__btn"
                      onClick={() => {
                        props.addToCart(
                          model,
                          color,
                          props.order[model][color] + 1
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="cart__delete"
                onClick={() => {
                  props.deleteColor(model, color);
                }}
              >
                &#10006;
              </button>
            </div>
          );
        }
      });
    });
  };
  return (
    <Transition in={props.cartModal} timeout={duration} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          className="cart"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="cart__inner">
            <h2 className="cart__title title"> Корзина </h2>
            <button className="cart__close-btn" onClick={props.onCartClick}>
              &#10006;
            </button>
            <div className="cart__items"> {initCartItems()} </div>
          </div>
          <div className="cart__total">Сумма заказа: {props.total} &#8372;</div>
          <NavLink
            to="/order"
            className="cart__order"
            onClick={props.onCartClick}
          >
            Оформить заказ
          </NavLink>
        </div>
      )}
    </Transition>
  );
};
export default Cart;
