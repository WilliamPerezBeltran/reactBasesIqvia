import React from "react";
import { removeFromCart } from "../../actionCreator";
import { connect } from "react-redux";

const styles = {
  footer: {
    fontWeight: "bold",
  },
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div header="Shopping Cart">
      <table>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right">
                <button onClick={() => removeFromCart(product)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
