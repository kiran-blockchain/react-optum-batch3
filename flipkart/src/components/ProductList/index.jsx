import { Product } from "../Product";

export const ProductList =(props)=>{
    console.log(props);
    const {products} = props.data;
    return(
      <div class="row">
        {products.map((item,index)=>{
            return <Product key={index} product = {item}/>
        })}
      </div>
    )
}