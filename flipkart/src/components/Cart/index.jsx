import { useContext, useState } from "react"
import { CartContext } from "../../Providers/CartProvider"
import { useSelector } from "react-redux";

export const Cart = () => {
    //const { cartItems } = useContext(CartContext);
    const cart = useSelector(x=>x.cart);
    const cartItems = cart.cartItems
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price;
    })
    const buildRows = () => {

        return cartItems.map((item, index) => {
            return (
                <tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td></td>
                </tr>
            )
        })
    }
    return (

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>  <tbody>
                {buildRows()}
                <tr>
                    <td>Total</td>
                    <td>{total}</td>
                </tr>
            </tbody>
        </table>
    )
}