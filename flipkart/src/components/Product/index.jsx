import { useContext } from "react";
import "./index.css"
import { CartContext } from "../../Providers/CartProvider";
export const Product = (props) => {
    const { product } = props;
    const { cartItems, setCartItems } = useContext(CartContext);

    return (
        <div class="col-md-3 card mt-3">
            <div class="p-5">
                <img src={product.images[0]} class="card-img-top imageStyle" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">{product.price}</a>
                    <div className="mt-3">
                        <button className="btn btn-success" onClick={e => {
                            setCartItems([...cartItems, product])
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div >
        </div>
    )
}