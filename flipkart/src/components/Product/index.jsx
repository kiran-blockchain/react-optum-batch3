import { useContext } from "react";
import "./index.css"
import { CartContext } from "../../Providers/CartProvider";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/CartSlice";
export const Product = (props) => {
    const { product } = props;
    //const { cartItems, setCartItems } = useContext(CartContext);
     const dispatch = useDispatch()
    return (
        <div class="col-md-3 card mt-3">
            <div class="p-5">
                <img src={product.images[0]} class="imageStyle card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>

                    <div className="mt-3">
                      
                            <a href="#" class="btn btn-primary">${product.price}</a> &nbsp;
                            
                                <button className="btn btn-success mt-2" onClick={e => {
                                    //setCartItems([...cartItems, product])
                                    dispatch(addToCart(product))
                                }}>Add to Cart</button>
                    </div>
                    <div className="mt-3">
                      
                      <a href="#" class="btn btn-primary">${product.price}</a> &nbsp;
                      
                          <button className="btn btn-danger mt-2" onClick={e => {
                              //setCartItems([...cartItems, product])
                              dispatch(removeFromCart(product))
                          }}>Remove</button>
              </div>
                </div>
            </div >
        </div>
    )
}