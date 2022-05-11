import React, { Component } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="ecommerce">
          <h2 href="#">Ecommerce</h2>
        </div>

        <div>
          <div className="redux-container">
            <div>
              <ProductList />
            </div>
            <div>
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
