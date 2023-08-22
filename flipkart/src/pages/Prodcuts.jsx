import { useEffect, useState } from "react"
import { GET_ALL_PRODUCTS } from "../constants"
import { services } from "../services"
import { ProductList } from "../components/ProductList";

export const Products = () => {
    const [products, setProducts] = useState({
        "total": 0,
        "skip": 0,
        "limit": 0,
        "products": [],
        "error": "",
    });
    useEffect(() => {
        const getProducts = async (url) => {
            try {
                let result = await services.getApi(url);
                setProducts(result);
            }
            catch (ex) {
                setProducts({ ...products, error: "Error in fetching results" })
            }
        }
        getProducts(GET_ALL_PRODUCTS)

    }, []);

    return (
        <div>
            {products.error == '' ?
                <ProductList data={products} />
                : (<div class="alert alert-dismissible alert-danger">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Oh snap!</strong> <a href="#" class="alert-link">Error in Fetching products please try later</a>
                </div>)
            }
        </div>
    )
}