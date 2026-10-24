import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import { Search, ShoppingCart } from "lucide-react"
import { useCart } from "../../Context/CartContext"
import { useState } from "react"
import SearchOverlay from "../SearchOverlay/SearchOverlay"
import './Navbar.css'

const Navbar = () => {
    const { cartCount, cartTotal, openCart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return(
        <>
        <nav className="navbar">
        <ul className="left-nav-list">
            <li><NavLink to="/" end>BUY T-SHIRTS</NavLink></li>
             <li><NavLink to="/men">MEN</NavLink></li>
              <li><NavLink to="/women">WOMEN</NavLink></li>
               <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
        <ul className="center-nav-list">
            <li><Logo/></li>
        </ul>
 
        <ul className="right-nav-list">
          <li>
             <button className="search-btn" onClick={() => setIsSearchOpen(true)} aria-label="Search">
               <Search size={18} strokeWidth={3.0} />
             </button>
          </li>

          <li className="cart-summary" onClick={openCart}>
            <span>₦{cartTotal.toLocaleString()}</span>
            <div className="cart-icon-wrapper">
              <ShoppingCart size={18}  strokeWidth={3.0} />
              <span className="cart-badge">{cartCount}</span>
            </div>
          </li>

          <li>
          <span>LOG IN</span>
          </li>
        </ul>

        </nav>
        {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
        </>
    )
}

export default Navbar