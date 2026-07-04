import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import { Search, ShoppingCart } from "lucide-react"
import './Navbar.css'

const Navbar = () => {
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
            <Search size={18}  strokeWidth={3.0} />
          </li>

          <li className="cart-summary">
            <span>$0.00</span>
            <div className="cart-icon-wrapper">
              <ShoppingCart size={18}  strokeWidth={3.0} />
              <span className="cart-badge">0</span>
            </div>
          </li>

          <li>
          <span>LOG IN</span>
          </li>
        </ul>

        </nav>
        </>
    )
}

export default Navbar