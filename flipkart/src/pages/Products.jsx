import { useEffect, useState } from "react"
import { GET_ALL_PRODUCTS } from "../constants"
import { services } from "../services"
import { ProductList } from "../components/ProductList";
import { Paginator } from "../components/Paginator";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";

export const Products = () => {
    // const [products, setProducts] = useState({
    //     "total": 0,
    //     "skip": 0,
    //     "limit": 0,
    //     "products": [],
    //     "error": "",
    // });
     const products = useSelector(x=>x.products);
    const dispatch = useDispatch();
    useEffect(() => {
        // const getProducts = async (url) => {
        //     try {
        //         let result = await services.getApi(url);
        //         setProducts({...result,error:""});
        //     }
        //     catch (ex) {
        //         setProducts({ ...products, error: "Error in fetching results" })
        //     } 
        // }
        //getProducts(GET_ALL_PRODUCTS)
        dispatch(fetchProducts(GET_ALL_PRODUCTS));

    }, []);

    return (
        <div>
            {products.error == '' ?
                <ProductList data={products} />
                : (<div className="alert alert-dismissible alert-danger">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Oh snap!</strong> <a href="#" className="alert-link">Error in Fetching products please try later</a>
                </div>)
            }
            <Paginator total={products.total}/>
        </div>
    )
}