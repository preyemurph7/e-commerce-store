import { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
import SearchOverlay from "../SearchOverlay/SearchOverlay"
import { useCart } from "../../Context/CartContext"
import './Navbar.css'

const Navbar = () => {
    const { cartCount, cartTotal, openCart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return(
        <>
        <nav className="navbar">
        <ul className="left-nav-list">
            <li className="menu-toggle-item">
                <button className="menu-toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                    <Menu size={24} />
                </button>
            </li>
            <li className="nav-link-item"><NavLink to="/" end>BUY T-SHIRTS</NavLink></li>
            <li className="nav-link-item"><NavLink to="/men">MEN</NavLink></li>
            <li className="nav-link-item"><NavLink to="/women">WOMEN</NavLink></li>
            <li className="nav-link-item"><NavLink to="/about">ABOUT</NavLink></li>
            <li className="nav-link-item"><NavLink to="/contact">CONTACT</NavLink></li>
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
            <span className="cart-total-text">₦{cartTotal.toLocaleString()}</span>
            <div className="cart-icon-wrapper">
              <ShoppingCart size={18} strokeWidth={3.0} />
              <span className="cart-badge">{cartCount}</span>
            </div>
          </li>

          <li>
            <NavLink to="/login" className="login-link">
              <span className="login-text">LOG IN</span>
              <User size={20} strokeWidth={2.5} className="login-icon" />
            </NavLink>
          </li>
        </ul>
        </nav>

        <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}></div>
        <aside className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="mobile-menu-header">
                <span>Menu</span>
                <button onClick={closeMenu} aria-label="Close menu"><X size={22} /></button>
            </div>
            <ul>
                <li><NavLink to="/" end onClick={closeMenu}>BUY T-SHIRTS</NavLink></li>
                <li><NavLink to="/men" onClick={closeMenu}>MEN</NavLink></li>
                <li><NavLink to="/women" onClick={closeMenu}>WOMEN</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink></li>
            </ul>
        </aside>

        {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
        </>
    )
}

export default Navbar