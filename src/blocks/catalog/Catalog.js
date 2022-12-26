import { useState, useEffect } from "react";
import { catalog } from "../../catalog.js";
import ProductCard from "../../components/product-card/ProductCard";
import Filter from "../filter/Filter.js";
import "./catalog.scss";
const Catalog = (props) => {
  const [filters, setFilters] = useState({ season: "", size: "" });
  const [productByFilter, setProductByFilter] = useState([]);

  useEffect(() => {
    setProductByFilter(filteredProduct());
  }, [filters]);

  const onChangeFilter = (season, size) => {
    setFilters({ season, size });
  };
  const filteredProduct = () => {
    return catalog.filter((item) => {
      if (filters.season && filters.size) {
        if (item.season === filters.season && item.size === filters.size) {
          return item;
        }
      }
      if (filters.season && !filters.size) {
        if (item.season === filters.season) {
          return item;
        }
      }
      if (filters.size && !filters.season) {
        if (item.size === filters.size) {
          return item;
        }
      }
    });
  };
  const products = catalog.map((product, index) => {
    return <ProductCard product={product} key={index} />;
  });
  const filteredItems = productByFilter.map((product, index) => {
    return <ProductCard product={product} key={index} />;
  });
  const itemsForShow = filteredItems.length ? filteredItems : products;
  return (
    <section className="catalog">
      <div className="catalog__inner container">
        <h2 className="catalog__title title"> Каталог </h2>
        <Filter onChangeFilter={onChangeFilter} season={props.season}/>
        <div className="catalog__grid"> {itemsForShow} </div>
      </div>
    </section>
  );
};
export default Catalog;
