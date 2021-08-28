import React from "react";
import Cartitem from "./cartitem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state ={
        products: [
        {
          price: 999,
          tittle: "Mobile phone",
          Qty: 1,
          img: "",
          id:1,
        },
        {
            price: 10000,
            tittle: "laptop",
            Qty: 9,
            img: "",
            id:2,
          },{
            price: 999,
            tittle: "watch",
            Qty: 19,
            img: "",
            id:2,
          },
        
    ]
}
}
  render() {
      const{products}=this.state;
    return (
      <div className="cart">
        
         {products.map((products)=>{
return(
    <Cartitem 
    products={products}  
    key={products.id} 
    />
)
         })};
      </div>
    );
  }
}

export default Cart;
