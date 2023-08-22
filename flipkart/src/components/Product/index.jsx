import "./index.css"
export const Product = (props) => {
    const { product } = props;
    return (
        <div class="col-md-3 card mt-3">
            <div class="p-5">
                <img src={product.images[0]} class="card-img-top imageStyle" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">{product.price}</a>
                </div>
            </div >
        </div>
    )
}