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
          title: 'Mobile phone',
          Qty: 1,
          img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 1,
        },
        {
          price: 10000,
          title: "laptop",
          Qty: 9,
          img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 2,
        },
        {
          price: 999,
          title: "watch",
          Qty: 19,
          img: "https://images.unsplash.com/photo-1512034705137-dc51c5ed36f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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

  getcartTotal =()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal +product.Qty * product.price;

    })
    return cartTotal;
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


        <div style={{fontSize:25,padding:10}}>Total:{this.getcartTotal()}</div>
      </div>

    );
  }
}

export default App;
