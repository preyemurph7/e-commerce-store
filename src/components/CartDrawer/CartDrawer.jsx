import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import "./CartDrawer.css";

const CartDrawer = () => {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? "open" : ""}`} onClick={closeCart}></div>

      <aside className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cart-drawer-header">
          <h3>Shopping Cart</h3>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>No products in the cart.</p>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.cartKey} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p className="cart-item-variant">
                    {item.selectedColor} / {item.selectedSize}
                  </p>
                  <p className="cart-item-price">₦{(item.price * item.quantity).toLocaleString()}</p>
                  <div className="cart-qty">
                    <button onClick={() => updateQuantity(item.cartKey, -1)}>
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartKey, 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.cartKey)}
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          {cartItems.length > 0 && (
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <strong>₦{cartTotal.toLocaleString()}</strong>
            </div>
          )}
          {cartItems.length > 0 && (
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          )}
          <button className="cart-continue-btn" onClick={closeCart}>
            Continue Shopping
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;