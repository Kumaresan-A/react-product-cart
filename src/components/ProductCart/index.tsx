import ProductList from "../ProductList";
import Cart from "../Cart";
import { useNavigate } from "react-router";

const ProductCart = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
      <div>
      <header className="header">
        <div className="back-button" onClick={handleBack}>
          {`<- Back`}
        </div>
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🛒</span>
          <span>ShopCart</span>
        </div>

        <div className="header-title">
          React Context Cart
        </div>
      </div>
    </header>

    <main className="main-container">
      <section className="product-section">
        <div className="section-header">
          <div>
            <h1>Products</h1>
            <p>Choose products and add them to your cart.</p>
          </div>
        </div>

        <ProductList />
      </section>

      <aside className="cart-section">
        <Cart />
      </aside>
    </main>
    </div>
  )
}

export default ProductCart;
