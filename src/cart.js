import React from "react";
import Cartitem from "./cartitem";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <Cartitem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            ondecreaseQuantity={props.ondecreaseQuantity}
            ondeleteQuantity={props.ondeleteQuantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;
