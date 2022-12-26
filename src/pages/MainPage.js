import { Helmet } from "react-helmet";
import TopSlider from "../blocks/top-slider/Top-slider";
import Top from "../blocks/top/Top";
import Seasons from "../blocks/seasons/Seasons";
import About from "../blocks/about/About";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Интернет-магазин 3740 </title>
        <meta
          name="description"
          content="Интернет-магазин женской одежды по ценам от производителя"
        />
      </Helmet>
      <TopSlider />
      <Top link={true} />
      <Seasons />
      <About />
    </>
  );
};
export default MainPage;
