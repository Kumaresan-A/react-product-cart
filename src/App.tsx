import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
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
  );
}

export default App;