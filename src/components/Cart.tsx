import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const {
        cartItems,
        removeFromCart,
        clearCart,
        totalAmount
    } = useCartContext();

    return (
        <div>
            <h2>Cart</h2>

            <div>
                {cartItems.length === 0 
                    ? (<div>No data in Cart</div>) 
                    : (
                        <>
                            {cartItems.map((cart) => {
                                return (
                                    <div key={cart.id} style={{ display: "flex", paddingTop: "12px" }}>
                                        <div >
                                            <p>Cart Id: {cart.id}</p>
                                            <p>Product Name: {cart.name}</p>
                                        </div>

                                        <div>
                                            <p>Price: ${cart.price.toFixed(2)}</p>
                                            <p>Quantity: {cart.quantity}</p>
                                        </div>

                                        <button onClick={() => removeFromCart(cart.id)}>Remove</button>
                                    </div>
                                )
                            })} 
                        </>
                    )
                }
            </div>

            <div><h3>Total: {totalAmount}</h3></div>

            <div><button onClick={() => clearCart()}>Clear All</button></div>
        </div>
    )
}

export default Cart;
