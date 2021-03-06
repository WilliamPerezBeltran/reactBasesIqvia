import React, { useState } from "react";
import "./Product.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(total) {
  return total.toLocaleString(undefined, currencyOptions);
}

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function add(product) {
    setCart((current) => {
      console.log("inside setCart");
      console.log(current);
      return [...current, product.name];
    });
    setTotal((current) => {
      console.log("inside current");
      console.log(current);
      return current + product.price;
    });
  }

  console.log("===============================");
  console.log("cart");
  console.log(cart);

  console.log("total");
  console.log(total);

  return (
    <div className="wrapper">
      <h1>function 'remove' is not implement</h1>
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>

      <div>
        {products.map((product) => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>
                {product.emoji}
              </span>
            </div>
            <button onClick={() => add(product)}>Add</button>
            <button>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
