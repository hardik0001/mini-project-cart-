import React from "react";

class Cartitem extends React.Component {
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
    // console.log('this',this.state );
    // this.setState({
    //   Qty:this.state.Qty +1,
      

    // });
    // setstate form 2
    this.setState((prestate)=>{
      return{
        Qty:prestate.Qty+1
      }
    });
  }
   descreseqty=()=>{
     const{Qty}=this.state;
     if(Qty===0){
       return;
     }
     this.setState((forstate)=>{
       return{
        Qty:forstate.Qty-1
       }
       
    });
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
              src="https://image.flaticon.com/icons/png/128/992/992683.png"
              onClick={this.descreseqty}
            />
            <img
              alt="delete"
              className="action-icons "
              src="https://img-premium.flaticon.com/png/128/484/premium/484611.png?token=exp=1630173976~hmac=aa8d6ee01120e926ad5a5f1399d4bb07"
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
export default Cartitem;
