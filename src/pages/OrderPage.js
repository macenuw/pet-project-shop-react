import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Order from "../blocks/order/Order";
const OrderPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Оформление заказа</title>
        <meta
          name="description"
          content="Оформление заказа в интернет-магазине женской одежды"
        />
      </Helmet>
      <Order
        total={props.total}
        order={props.order}
        zeroedOrder={props.zeroedOrder}
      />{" "}
    </>
  );
};
export default OrderPage;
