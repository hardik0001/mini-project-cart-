import React from "react";

class cartitem extends React.Component {
  render() {
    return (
      <div class="cart-item">
        <div class="left-block">
           <img style={styles.image} alt="" />
        </div>
        <div class="right-block">
          <div style={{fontSize:25}}>phone</div>
          <div style={{color:'#ccc'}}>rs 99</div>
          <div style={{color:'#ccc'}}>qty:1</div>
          <div className="cart-item-actions">{/*button*/}</div>
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
    background:'#ccc'
  }
};
export default cartitem;
