/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { createContext, useContext, useEffect, useState } from "react";

import type { ICartItem, IProducts } from "../types";

interface ICartContext {
    cartItems: ICartItem[];

    addToCart: (product: IProducts) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;

    totalQuantity: number;
    totalAmount: number;
}

const cartContext = createContext<ICartContext>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},

    totalQuantity: 0,
    totalAmount: 0,
});

const CART_STORAGE_KEY  = "cart-items";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
        const storedCartitems = localStorage.getItem(CART_STORAGE_KEY);

        if (!storedCartitems) return [];

        try {
            return JSON.parse(storedCartitems) as ICartItem[];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: IProducts) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            setCartItems((prevItems) => {
                return prevItems.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            });
        } else {
            setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item.id !== productId);
        });
    };

    const clearCart = () => {
        setCartItems([]);
    }

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <cartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalQuantity, totalAmount }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(cartContext);

    if (!context) {
        throw new Error("Use Cart must be used inside the Cart Context Provider");
    }

    return context;
} 