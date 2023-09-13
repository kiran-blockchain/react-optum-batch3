import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../../Providers/AuthProvider";

export const Header = (props) => {
    const authContext = useContext(AuthContext);
    //const { cartItems } = useContext(CartContext);
    const { cartItems } = useSelector(x => x.cart);
    const { theme, setTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const renderNavBarLinks = () => {

        const navItems = authContext.profile.isLoggedIn ? ['Products', 'Cart'] : props.headerConfig.links;

        return (
            navItems.length > 0 ? navItems.map((item, index) => {
                return (<li className="nav-item" key={index}>
                    {/* <Link to={item} className="nav-link">{item}</Link> */}
                    <a className="nav-link active" onClick={e => {
                        navigate("/" + item.toLowerCase())
                    }}>{item}
                    </a>
                </li>)
            }) : null
        )
    }
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.headerConfig.companyName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        {renderNavBarLinks()}
                        <li className="nav-item">
                            {/* <Link to="/cart">Cart</Link> */}
                            {/* <a className="nav-link active" href="/cart">Cart-{cartItems.length}
                            </a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" onClick={e => {
                                let newTheme = theme == 'Dark' ? "Light" : 'Dark';
                                setTheme(newTheme);
                            }}>{theme}
                            </a>
                        </li>
                        {authContext.profile.isLoggedIn ?
                            <li className="nav-item">
                                <a className="nav-link active" href="#" onClick={e => {
                                    authContext.handleLogout();
                                }}>Logout
                                </a>
                            </li> : null}
                    </ul>
                </div>
            </div>
        </nav>
    )
}