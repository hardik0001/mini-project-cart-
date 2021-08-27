import React from "react";

class cartitem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      tittle: "Mobile phone",
      Qty: 1,
      img: "",
    };
    ///this.increaseQty=this.increaseQty.bind(this);
  }
  increaseQty=()=>{
      console.log('this',this.state );
  }
  render() {
    const { price, tittle, Qty } = this.state;
    return (
      <div class="cart-item">
        <div class="left-block">
          <img style={styles.image} alt="" />
        </div>
        <div class="right-block">
          <div style={{ fontSize: 25 }}>{tittle}</div>
          <div style={{ color: "#ccc" }}>{price}</div>
          <div style={{ color: "#ccc" }}>{Qty}</div>
          <div className="cart-item-actions">
            {/*button*/}
            <img
              alt="increase"
              className="action-icons "
              src="https://image.flaticon.com/icons/png/128/992/992651.png"
              onClick={this.increaseQty}
            />
            <img
              alt="decrease"
              className="action-icons "
              src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            />
            <img
              alt="delete"
              className="action-icons "
              src="https://img-premium.flaticon.com/png/128/484/premium/484611.png?token=exp=1630084171~hmac=4fe69cf3beb7bea4ee451ee229143b10"
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 110,
    width: 110,
    boderradius: 4,
    background: "#ccc",
  },
};
export default cartitem;
