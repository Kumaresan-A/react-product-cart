import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const {
        cartItems,
        removeFromCart,
        clearCart,
        totalAmount
    } = useCartContext();

    return (
        <div className="cart-card">
            <div className="cart-header">
                <div>
                    <h2>Your Cart</h2>
                    <div className="cart-title">
                        <span>
                            {cartItems.length}{" "}{cartItems.length === 1 ? "item" : "items"}
                        </span>

                        <button onClick={() => clearCart()}>Clear Cart</button>
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>

                        <h3>Your Cart is Empty</h3>

                        <p>Add Some product get started.</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => {
                                return (
                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-icon">
                                            📦
                                        </div>

                                        <div className="cart-item-details">
                                            <div className="cart-item-top">
                                                <h3>{item.name}</h3>

                                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                                    x
                                                </button>
                                            </div>

                                            <span className="cart-item-price">
                                                ₹{item.price.toLocaleString("en-IN")}
                                            </span>

                                            <div className="cart-item-bottom">
                                                <span className="quantity">
                                                    Quantity: {item.quantity}
                                                </span>

                                                <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="cart-summary">
                            <div className="summary-row">
                                <span>SubTotal</span>

                                <span>₹{totalAmount.toLocaleString("en-IN")}</span>
                            </div>

                            <div className="summary-row total-row">
                                <strong>Total</strong>

                                <strong>₹{totalAmount.toLocaleString("en-IN")}</strong>
                            </div>

                            <button className="checkout-button">Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart;
