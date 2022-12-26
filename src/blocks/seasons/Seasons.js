import { NavLink } from "react-router-dom";
import "./seasons.scss";
const Seasons = () => {
  return (
    <div className="seasons">
      <div className="seasons__inner container">
        <NavLink
          to="/catalog/winter"
          className="seasons__link seasons__link--winter"
        >
          <span className="seasons__text title"> Зима </span>
        </NavLink>
        <NavLink
          to="/catalog/autumn"
          className="seasons__link seasons__link--autumn"
        >
          <span className="seasons__text title"> Осень - Весна </span>
        </NavLink>
        <NavLink
          to="/catalog/summer"
          className="seasons__link seasons__link--summer"
        >
          <span className="seasons__text title"> Лето </span>
        </NavLink>
      </div>
    </div>
  );
};
export default Seasons;
