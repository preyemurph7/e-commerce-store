import { NavLink } from "react-router-dom";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";
import "./Footer.css";


const Footer = () => {
    return(
        <>
        <footer className="footer">
          <div className="footer-subscribe">
            <h3>Subscribe To Get Offers In Your Inbox</h3>
            <p>Swag meets Casual. Catch up with us when we drop Newsletters!</p>
            <div className="subscribe-form">
                 <input type="email" placeholder="Your Email Address *"  />
                 <button className="subscribe-button">Subscribe</button>
            </div>
           </div>

          <ul className="footer-nav">
             <li><NavLink to="/" end>Buy T-Shirts</NavLink></li>
             <li><NavLink to="/women">Women</NavLink></li>
             <li><NavLink to="/men">Men</NavLink></li>
             <li><NavLink to="/about">About</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          

          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><SiFacebook size={18} /></a>
            <a href="#" aria-label="Twitter"><SiX size={18} /></a>
            <a href="#" aria-label="Instagram"><SiInstagram size={18} /></a>
          </div>

          <div className="footer-bottom">
             <p>Copyright © 2026 T-Shirts Store | Powered by T-Shirts Store</p>
          </div>
        </footer>
       </>
    )
}

export default Footer