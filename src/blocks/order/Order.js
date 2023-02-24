import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import colorsMap from "../../colorsMap";
import "./order.scss";

const Order = (props) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const generateMessageOrder = () => {
    let message = "";
    const models = Object.keys(props.order);
    models.forEach((model) => {
      message += `  <table style="max-width: 600px; width:100%; font-weight: bold; text-align: center; border-bottom: 1px solid black;"><tr><td style="font-weight: bold;text-align: center;width:100%;">${model}</td></tr></table>`;
      let colors = Object.keys(props.order[model]);
      message += '<table style="max-width: 600px; width:100%;">';
      colors.forEach((color) => {
        if (color !== "info") {
          message += `<tr><td style="font-size:14px" font-weight: bold;>${colorsMap[color].name} : ${props.order[model][color]}шт.</td></tr>`;
        }
      });
      message += "</table>";
    });
    return message;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      tel: "",
      email: "",
      city: "",
      region: "",
      address: "",
      number: "",
      cost: props.total,
      message: generateMessageOrder(),
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Минимум 2 символа!")
        .required("Обязательно поле!"),
      lastName: Yup.string()
        .min(2, "Минимум 2 символа!")
        .required("Обязательно поле!"),
      tel: Yup.string()
        .min(10, "Минимум 10 символа!")
        .required("Обязательно поле!"),
      city: Yup.string()
        .min(2, "Минимум 2 символа!")
        .required("Обязательно поле!"),
      region: Yup.string()
        .min(2, "Минимум 2 символа!")
        .required("Обязательно поле!"),
      address: Yup.string()
        .min(2, "Минимум 2 символа!")
        .required("Обязательно поле!"),
      number: Yup.number("Номер отделения укажите числом")
        .min(1, "Минимум 1 символа!")
        .required("Обязательно поле!"),
      email: Yup.string()
        .email("Обязательно укажите правильный адрес почты")
        .required(),
    }),
    onSubmit: (values) => {
      const orderData = {
        name: values.name,
        lastName: values.lastName,
        tel: values.tel,
        email: values.email,
        city: values.city,
        region: values.region,
        address: values.address,
        number: values.number,
        cost: values.cost,
        message: values.message,
      };
      if (orderData.cost > 0) {
        fetch("./mailer.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }).then((res) => {
          if (res.ok) {
            setMessage("Заказ отправлен на обработку");
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 2000);
            formik.resetForm();
            props.zeroedOrder();
          } else {
            setMessage("Произошла ошибка");
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 2000);
            localStorage.removeItem('order')
            formik.resetForm();
          }
        });
      } else {
        setMessage("Корзина Пуста");
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }
    },
  });
  const notice = showMessage ? (
    <div className="notice">
      <p className="notice__text">{message}</p>
    </div>
  ) : null;
  return (
    <section className="order">
      <div className="order__inner container">
        <h2 className="order__title title"> Оформление заказ </h2>
        <form className="order__items" onSubmit={formik.handleSubmit}>
          <div className="order__item">
            <h3 className="order__subtitle"> Данные заказчика </h3>
            <label htmlFor="name" className="order__label">
              <span className="order__label-name"> Имя </span>
              <input
                type="text"
                id="name"
                name="name"
                className="order__input"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <div> {formik.errors.name} </div>
              ) : null}
            </label>
            <label htmlFor="lastname" className="order__label">
              <span className="order__label-name"> Фамилия </span>
              <input
                type="text"
                id="lastname"
                name="lastName"
                className="order__input"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName ? (
                <span> {formik.errors.lastName} </span>
              ) : null}
            </label>
            <label htmlFor="tel" className="order__label">
              <span className="order__label-name"> Номер телефона </span>
              <input
                type="text"
                id="tel"
                name="tel"
                className="order__input"
                value={formik.values.tel}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.tel && formik.touched.tel ? (
                <span> {formik.errors.tel} </span>
              ) : null}
            </label>
            <label htmlFor="email" className="order__label">
              <span className="order__label-name"> Почта </span>
              <input
                type="text"
                id="email"
                name="email"
                className="order__input"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <span> {formik.errors.email} </span>
              ) : null}
            </label>
          </div>
          <div className="order__item">
            <h3 className="order__subtitle"> Новая Почта </h3>
            <label htmlFor="city" className="order__label">
              <span className="order__label-name"> Город </span>
              <input
                type="text"
                id="city"
                name="city"
                className="order__input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.city && formik.touched.city ? (
                <span> {formik.errors.city} </span>
              ) : null}
            </label>
            <label htmlFor="region" className="order__label">
              <span className="order__label-name"> Область </span>
              <input
                type="text"
                id="region"
                name="region"
                className="order__input"
                value={formik.values.region}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.region && formik.touched.region ? (
                <span> {formik.errors.region} </span>
              ) : null}
            </label>
            <label htmlFor="address" className="order__label">
              <span className="order__label-name"> Адрес Отделения </span>
              <input
                type="text"
                id="address"
                name="address"
                className="order__input"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.address && formik.touched.address ? (
                <span> {formik.errors.address} </span>
              ) : null}
            </label>
            <label htmlFor="number" className="order__label">
              <span className="order__label-name"> Номер Отделения </span>
              <input
                type="number"
                id="number"
                name="number"
                className="order__input"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.number && formik.touched.number ? (
                <span> {formik.errors.number} </span>
              ) : null}
            </label>
          </div>
          <div className="order__item">
            <h3 className="order__subtitle"> Для проверки </h3>
            <ul className="order__list">
              <li className="order__list-item">
                <span className="order__text"> Заказ на Имя </span>
                <span className="order__data">
                  {`${formik.values.lastName} ${formik.values.name}`}
                </span>
              </li>
              <li className="order__list-item">
                <span className="order__text"> Отправить по адресу: </span>
                <span className="order__data">
                  {`Обл.${formik.values.region} ${formik.values.city} ${formik.values.address} (Новая Почта №:${formik.values.number})`}
                </span>
              </li>
              <li className="order__list-item">
                <span className="order__text"> Контакты: </span>
                <span className="order__data">
                  {`Тел: ${formik.values.tel}, Email: ${formik.values.email}`}
                </span>
              </li>
              <li className="order__list-item">
                <span className="order__text"> Сумма Заказа </span>
                <span className="order__data"> {props.total} &#8372;</span>
              </li>
            </ul>
          </div>
          <button className="order__ordered" onClick={formik.onSubmit}>
            Заказать
          </button>
        </form>
      </div>
      {notice}
    </section>
  );
};
export default Order;
