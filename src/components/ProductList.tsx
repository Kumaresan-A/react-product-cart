import { products } from "../data/products";
import {  useCartContext } from "../context/CartContext";

const ProductList = () => {
    const { addToCart } = useCartContext();

    return (
        <div>
            <h2>Products</h2>

            {products.map((product) => {
                return (
                    <div key={product.id} style={{ display: "flex", paddingTop: "12 px" }}>
                        <span>{product.name} -- {product.price}</span>

                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                )
            })}    
        </div>
    )
}

export default ProductList;
