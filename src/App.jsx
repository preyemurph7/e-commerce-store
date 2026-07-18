import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { CartProvider } from "./Context/CartContext";
import './App.css'

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
             <Route path="/" element={<Home/>}/>
             <Route path="/women" element={<Women/>} />
             <Route path="/men" element={<Men/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/contact" element={<Contact/>} />

             </Route>      
        </Routes>
    </BrowserRouter> 
    </CartProvider>
  );
}

export default App
 
// E-COMMERCE APP - FEATURE CHECKLIST

// CORE FEATURES
// - Product listing page with grid layout
// - Product filtering (category, price range, size)
// - Product detail page (images, description, size/color selector, reviews)
// - Search functionality
// - Shopping cart (add/remove/update quantity, persisted with Context + localStorage)
// - Checkout flow (shipping info → payment → confirmation)
// - User authentication (sign up / login / logout)
// - Order history (past orders tied to logged-in user)
// - Wishlist / save for later
// - Fully responsive design (mobile menu, responsive grid)

// ADVANCED / PROFESSIONAL TOUCHES
// - Product sorting (price low-high, newest, popularity)
// - Pagination or infinite scroll on product listings
// - Loading skeletons instead of blank loading screens
// - Toast notifications (e.g. "Added to cart!")
// - Promo code / discount input at checkout
// - Product reviews & star ratings
// - Recently viewed products section
// - Custom 404 page for invalid routes

// PORTFOLIO-IMPRESSIVE EXTRAS (pick a few, don't need all)
// - Dark mode toggle
// - Animated page transitions between routes
// - Admin dashboard (products managed via tutor's backend)
// - Order tracking status (Processing → Shipped → Delivered)

// STATE MANAGEMENT
// - Context API + useReducer for cart/auth global state
// - localStorage persistence for cart between sessions

// BACKEND (handled by tutor)
// - Database (products, users, orders, inventory)
// - REST/GraphQL API endpoints
// - Authentication logic (tokens/sessions)
// - Payment gateway processing (Stripe/Paystack etc.)
// - Business logic (totals, discounts, stock checks)
// - Security (fraud checks, server-side validation)