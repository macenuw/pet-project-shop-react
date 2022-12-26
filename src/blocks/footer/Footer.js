import Menu from "../../components/menu/Menu";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__inner">
        <Menu className={"active"} />{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
