import React from "react";
import Cartitem from "./cartitem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          tittle: "Mobile phone",
          Qty: 1,
          img: "",
          id: 1
        },
        {
          price: 10000,
          tittle: "laptop",
          Qty: 9,
          img: "",
          id: 2
        },
        {
          price: 999,
          tittle: "watch",
          Qty: 19,
          img: "",
          id: 3
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].Qty += 1;

    this.setState({
      products:products
    })
  }

  handledecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].Qty===0){
        return;
    }

    products[index].Qty -= 1;
    this.setState({
      products:products
    })
  }
  render () {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <Cartitem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              ondecreaseQuantity={this.handledecreaseQuantity}
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;