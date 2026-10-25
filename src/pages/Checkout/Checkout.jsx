import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setOrderPlaced(true);
      clearCart();
    }, 1200);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-container checkout-message">
        <CheckCircle size={40} color="green" />
        <h1>Thank you for your order</h1>
        <p>This is a demo store, so no payment was taken and no order was created.</p>
        <Link to="/" className="checkout-btn">Continue Shopping</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container checkout-message">
        <h1>Your cart is empty</h1>
        <p>Add something to your cart before checking out.</p>
        <Link to="/" className="checkout-btn">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <input type="email" placeholder="Email address *" required />
          <input type="tel" placeholder="Phone number *" required />

          <h2>Shipping address</h2>
          <div className="checkout-row">
            <input type="text" placeholder="First name *" required />
            <input type="text" placeholder="Last name *" required />
          </div>
          <input type="text" placeholder="Street address *" required />
          <div className="checkout-row">
            <input type="text" placeholder="City *" required />
            <input type="text" placeholder="State *" required />
          </div>

          <h2>Payment</h2>
          <input type="text" inputMode="numeric" placeholder="Card number *" required />
          <div className="checkout-row">
            <input type="text" placeholder="MM / YY *" required />
            <input type="text" inputMode="numeric" placeholder="CVV *" required />
          </div>

          <button type="submit" className="checkout-btn" disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : `Place order · ₦${cartTotal.toLocaleString()}`}
          </button>
        </form>

        <aside className="order-summary">
          <h2>Order summary</h2>

          {cartItems.map((item) => (
            <div key={item.cartKey} className="summary-item">
              <img src={item.image} alt={item.title} />
              <div className="summary-item-info">
                <p className="summary-title">{item.title}</p>
                <p className="summary-variant">
                  {item.selectedColor} / {item.selectedSize} × {item.quantity}
                </p>
              </div>
              <p>₦{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{cartTotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₦{cartTotal.toLocaleString()}</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;