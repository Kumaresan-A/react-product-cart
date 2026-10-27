import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductsPage from "../pages/Products";
import ProductCartPage from "../pages/Product-Cart";

const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product-cart" element={<ProductCartPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterProvider;
