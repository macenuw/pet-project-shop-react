import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Top from "../blocks/top/Top";
import Product from "../blocks/product/Product";
import { catalog } from "../catalog";
import colorsMap from "../colorsMap";
const ProductPage = (props) => {
  const { model, color } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [model, color]);
  const productForShow = catalog.filter((item) => item.model === model);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {productForShow[0].name} </title>
        <meta
          name="description"
          content={`${productForShow[0].name} цвета ${colorsMap[color].name}`}
        />
      </Helmet>
      <Product
        product={productForShow[0]}
        color={color}
        addToCart={props.addToCart}
      />
      <Top />
    </>
  );
};
export default ProductPage;
