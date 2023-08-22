import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";
import { ThemeContext } from "../../Providers/ThemeProvider";

export const Header = (props) => {
    console.log(props);
    const { cartItems } = useContext(CartContext);
    const {theme,setTheme} = useContext(ThemeContext);

    const renderNavBarLinks = () => {
        const navItems = props.headerConfig.links;

        return (
            navItems.length > 0 ? navItems.map((item, index) => {
                return (<li class="nav-item" key={index}>
                    <a class="nav-link active" href="#">{item}
                    </a>
                </li>)
            }) : null
        )
    }
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.headerConfig.companyName}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        {renderNavBarLinks()}
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Cart-{cartItems.length}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#" onClick={e=>{
                                let newTheme = theme=='Dark'?"Light":'Dark';
                                setTheme(newTheme);
                            }}>{theme}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}