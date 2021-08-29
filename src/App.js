import react from "react";
import Cart from "./cart";
import Navbar from "./navbar";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          tittle: "Mobile phone",
          Qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 10000,
          tittle: "laptop",
          Qty: 9,
          img: "",
          id: 2,
        },
        {
          price: 999,
          tittle: "watch",
          Qty: 19,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].Qty += 1;

    this.setState({
      products: products,
    });
  };

  handledecreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].Qty === 0) {
      return;
    }

    products[index].Qty -= 1;
    this.setState({
      products: products,
    });
  };
  handledeleteQuantity = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  getcartcount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((products)=>{
      count +=products.Qty;
    })
    return count;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcartcount()}/>
        <Cart
         products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          ondecreaseQuantity={this.handledecreaseQuantity}
          ondeleteQuantity={this.handledeleteQuantity}
        />
      </div>
    );
  }
}

export default App;
