import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Catalog from "../blocks/catalog/Catalog";
const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { season } = useParams();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Каталог товаров </title>
        <meta
          name="description"
          content="Каталог товаров интернет-магазина женской одежды 3740"
        />
      </Helmet>
      <Catalog season={season} />
    </>
  );
};
export default CatalogPage;
