import { NavLink } from "react-router-dom";
import sizeMap from "../../sizeMap";
import "./product-card.scss";
const ProductCard = (props) => {
  const productCardClasses = `product-card ${props.className}`;
  return (
    <NavLink
      className={productCardClasses}
      to={`/product/${props.product.model}/${props.product.colors[0]}`}
    >
      <div className="product-card__img-inner">
        <picture>
          <source
            srcSet={`../../images/products/${props.product.model}/${props.product.colors[0]}.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/products/${props.product.model}/${props.product.colors[0]}.jpg`}
            alt={`${props.product.name} ${props.product.model}`}
            className="product-card__img"
          />
        </picture>
        <span className="product-card__name"> {props.product.name} </span>
        <span className="product-card__model"> №{props.product.model} </span>
      </div>
      <div className="product-card__info">
        <div className="product-card__size">{sizeMap[props.product.size]}</div>
        <div className="product-card__price">
          Цена: {props.product.price} &#8372;
        </div>
      </div>
    </NavLink>
  );
};
export default ProductCard;
