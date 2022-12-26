import { useState, useEffect } from "react";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import CartBtn from "../../components/cartBtn/CartBtn";
import ContactBtn from "../../components/contactBtn/ContactBtn";
import "./header.scss";
const Header = (props) => {
  const [mobMenu, setMobMenu] = useState(
    window.innerWidth < 560 ? true : false
  );
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 560) {
        setMobMenu(false);
      } else {
        setMobMenu(true);
      }
    });
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Menu
            className={"header__menu"}
            mobMenu={mobMenu}
            menuOpen={menuOpen}
            setMobMenu={setMobMenu}
          />
          <button
            className="header__menu-btn"
            onClick={() => {
              setMenuOpen((menuOpen) => !menuOpen);
            }}
          >
            <span className="header__btn-decor"> </span>
          </button>
          <CartBtn
            onCartClick={props.onCartClick}
            totalCost={props.totalCost}
          />
          <ContactBtn onContactClick={props.onContactClick} />
        </div>
      </div>
    </header>
  );
};
export default Header;
