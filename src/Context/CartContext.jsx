import { createContext, useState, useContext, useEffect } from "react";
import { products } from "../data/productData";
const CartContext = createContext();

const loadCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem("tamluxe-cart")) || [];
    return saved
      .map((s) => {
        const product = products.find((p) => p.id === s.id);
        return product ? { ...product, ...s } : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
};
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  
 useEffect(() => {
  const minimal = cartItems.map(
    ({ id, cartKey, quantity, selectedColor, selectedSize }) => ({
      id, cartKey, quantity, selectedColor, selectedSize,
    })
  );
  localStorage.setItem("tamluxe-cart", JSON.stringify(minimal));
}, [cartItems]);
  const addToCart = (product) => {
    const quantityToAdd = product.quantity || 1;
    const cartKey = `${product.id}-${product.selectedColor}-${product.selectedSize}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey);

      if (existing) {
        return prev.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }

      return [...prev, { ...product, cartKey, quantity: quantityToAdd }];
    });

  };

  const updateQuantity = (cartKey, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartKey === cartKey
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (cartKey) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };
  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount,
        cartTotal,
        isCartOpen,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);