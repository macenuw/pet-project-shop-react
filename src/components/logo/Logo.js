import { NavLink } from "react-router-dom";
import { logo } from "../../control";
import "./logo.scss";
const Logo = () => {
  return (
    <div className="logo">
      <NavLink to={logo.link} className="logo__link">
        <picture>
          <source srcSet={logo.srcWebP} type="image/webp" />
          <img src={logo.srcPng} alt={logo.alt} className="logo__img" />
        </picture>
      </NavLink>
    </div>
  );
};
export default Logo;
