import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';

export function Cart() {
  const cartCheckboxId = useId();
  //tnemos que traernos el carrito, y arreglar el carrito todo lo que tenemos
  //clearCart es bastante sencillo que si le damos clic al botón, desaparecen los carritos seleccionados
  const { cart, clearCart } = useCart();//pasamos onChange en button el clearCartIcon

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img 
                src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" 
                alt="iPhone" 
            />
            <div>
                <strong>iPhone</strong> - $1499
            </div>

            <footer>
                <small>
                    Qty: 1
                </small>
                <button>+</button>
            </footer>
          </li>
        </ul>

        <button style={{ background: '#E36414' }} onClick={ clearCart } >
            <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
