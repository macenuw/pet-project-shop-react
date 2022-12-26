import { Transition } from "react-transition-group";
import { contact } from "../../control";

import "./contact.scss";
const Contact = (props) => {
  const duration = 500;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    visibility: "hidden",
  };

  const transitionStyles = {
    entering: {
      opacity: 1,
      visibility: "visible",
    },
    entered: {
      opacity: 1,
      visibility: "visible",
    },
    exiting: {
      opacity: 0,
      visibility: "hidden",
    },
    exited: {
      opacity: 0,
      visibility: "hidden",
    },
  };
  const contactItems = contact.map((item, index) => {
    return (
      <li className="contact__item" key={index}>
        <span className="contact__provider">
          <img
            src={item.provider}
            alt={item.provider}
            className="contact__img"
          />
        </span>
        <a href={item.href} className="contact__link">
          {item.contact}
        </a>
      </li>
    );
  });
  return (
    <Transition in={props.contactModal} timeout={duration}>
      {(state) => (
        <div
          className="contact"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="contact__inner">
            <h3 className="contact__title title"> Контакты </h3>
            <ul className="contact__list"> {contactItems} </ul>
            <button className="contact__close" onClick={props.onContactClick}>
              &#10006;
            </button>
          </div>
        </div>
      )}
    </Transition>
  );
};
export default Contact;
