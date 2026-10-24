import { ShoppingCart } from "lucide-react"
import { useCart } from "../../Context/CartContext";
import "./GoToCartButton.css"

const GoToCartButton = () => {
    const { openCart } = useCart();
    
    return (
        <button className="go-to-cart-btn" onClick={openCart}>
            <ShoppingCart  size={20} strokeWidth={3.0} className="cart-icon" />
            <span>Go to Cart</span>
        </button>
    )
}

export default GoToCartButton