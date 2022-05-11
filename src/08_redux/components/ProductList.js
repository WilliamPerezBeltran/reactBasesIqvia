import React from "react";
import { addToCart } from "../../actionCreator";
import { connect } from "react-redux";

const styles = {
  products: {
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  product: {
    width: "220px",
    marginLeft: 10,
    marginRight: 10,
  },
};

const ProductList = ({ products, addToCart }) => {
  return (
    <div style={styles.products}>
      {products.map((product) => (
        <div className="thumbnail" style={styles.product} key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="caption">
            <h4>{product.name}</h4>
            <p>
              <button
                type="button"
                onClick={() => addToCart(product)}
                disabled={product.inventory <= 0}
              >
                ${product.price}{" "}
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch,
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
