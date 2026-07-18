import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";
import { CheckCircle } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("This field is required.");
      return;
    }

    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-subscribe">
          <h3>Subscribe To Get Offers In Your Inbox</h3>
          <p>Swag meets Casual. Catch up with us when we drop Newsletters!</p>

          {isSubmitted ? (
            <div className="thank-you-message">
              <CheckCircle size={32} color="green" />
              <h3>Thank you</h3>
              <p>Your form has been submitted successfully. We'll review your details and get back to you soon.</p>
            </div>
          ) : (
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={error ? "input-error" : ""}
                  disabled={isLoading}
                />
                {error && <p className="error-message">{error}</p>}
              </div>
              <button type="submit" className="subscribe-button" disabled={isLoading}>
                {isLoading ? <span className="spinner"></span> : "Subscribe"}
              </button>
            </form>
          )}
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
  );
};

export default Footer