import { Product } from "../Product";
export const ProductList =(props)=>{
    console.log(props);
    const {total,skip,limit,products} = props.data;
    return(
      <div class="row">
        {products.map((item,index)=>{
            return <Product product = {item}/>
        })}
      </div>
    )
}