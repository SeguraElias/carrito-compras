import { useId } from "react";
import { CartIcon, ClearCartIcon } from './Icons'
import "./Cart.css"

export function Cart(){
    const cartCheckboxId = useId()

    return (
        <>
            <label htmlFor={ cartCheckboxId } className="card-button">
                <CartIcon />
            </label>
            <input type="checkbox" hidden id={ cartCheckboxId } />

            <aside>
                <ul>
                    <li>
                        <img src="" alt="" />
                        <div>
                            <strong>iPhone 9</strong> - $9999
                        </div>
                    </li>
                </ul>
            </aside>
        </>
    )
}