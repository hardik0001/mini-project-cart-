import React from "react";

class Cartitem extends React.Component {
  render() {
    console.log("this.props", this.props);
    const { price, title, Qty } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      ondecreaseQuantity,
      ondeleteQuantity,
    } = this.props;

    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#ccc" }}> RS {price}</div>
          <div style={{ color: "#ccc" }}> QTY: {Qty}</div>
          <div className="cart-item-actions">
            {/*button*/}
            <img
              alt="increase"
              className="action-icons "
              src="https://image.flaticon.com/icons/png/128/992/992651.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons "
              src="https://image.flaticon.com/icons/png/128/992/992683.png"
              onClick={() => ondecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons "
              src="https://img-premium.flaticon.com/png/128/484/premium/484611.png?token=exp=1630173976~hmac=aa8d6ee01120e926ad5a5f1399d4bb07"
              onClick={()=>ondeleteQuantity(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height:110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default Cartitem;
