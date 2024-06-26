import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

//separamos el li del aside ul
function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={ thumbnail }
        alt={ title }
      />
      <div>
        <strong>{ title }</strong> - ${ price }
      </div>

      <footer>
        <small> Qty: { quantity } </small>
        <button onClick={ addToCart } >+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();

  //traemos la variable de estado que se llame addToCart
  const { cart, clearCart, addToCart } = useCart();

  const cantProductos = cart.reduce((total, product) => total + product.quantity, 0)

  const totalPagar = cart.reduce((total, product) => total + product.price * product.quantity, 0)

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {
            cart.map( product => (
              <CartItem 
                key={ product.id } 
                addToCart={ () => addToCart(product) }  
                { ...product } 
              />
            ))
          }
        </ul>

        <p>
          cantidad: { cantProductos }
        </p>
        <p>
          precio total: ${ totalPagar }
        </p>

        <button style={{ background: "#E36414" }} onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}