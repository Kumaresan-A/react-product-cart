import { products } from "../data/products";
import {  useCartContext } from "../context/CartContext";

const ProductList = () => {
    const { addToCart } = useCartContext();

    return (
        <div className="product-grid">
            {products.map((product) => {
                return (
                    <article key={product.id} className="product-card">
                        <div className="product-image">
                            <span>📦</span>
                        </div>

                        <div className="product-content">
                            <span className="product-category">
                                Product
                            </span>

                            <h3>{product.name}</h3>

                            <div className="product-footer">
                                <span className="product-price">
                                    ₹{product.price.toLocaleString("en-IN")}
                                </span>

                                <button className="add-button" onClick={() => addToCart(product)}>Add</button>
                            </div>
                        </div>

                    </article>
                )
            })}
        </div>
    )
}

export default ProductList;
