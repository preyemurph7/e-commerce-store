import { ShoppingCart } from "lucide-react"
import "./GoToCartButton.css"

const GoToCartButton = () => {
    return (
        <button className="go-to-cart-btn">
            <ShoppingCart  size={20} strokeWidth={3.0} className="cart-icon" />
            <span>Go to Cart</span>
        </button>
    )
}

export default GoToCartButton