
# TamLuxe

A responsive e-commerce storefront for men's and women's t-shirts, built with React as my first portfolio project.

**Live demo:** https://tamluxe.vercel.app

> This is a frontend demo. There is no backend, so payments, accounts, and orders are not real. Product photos are free stock images used as placeholders.

## Features

- **Shop pages:** Home, Men, and Women product grids with price sorting
- **Product page:** colour and size selection, quantity picker, add to cart, collapsible description and reviews, and related products
- **Quick view:** a modal preview of any product, with a loading state
- **Cart:** a slide-in drawer where you can change quantities, remove items, and see the subtotal. The cart is saved in the browser, so it survives a refresh
- **Search:** an overlay that finds products by name, category, or colour
- **Checkout, login, and sign-up:** demo screens with form validation (nothing is sent anywhere)
- **Newsletter form:** validation, a loading spinner, and a success message
- **About and Contact pages:** a parallax section and a contact form (UI only)
- **Responsive design:** a hamburger menu and layouts for phones, tablets, and desktops

## Screenshots

<img width="1080" height="1440" alt="product-mobile webp" src="https://github.com/user-attachments/assets/cbbca7cd-33d6-4fdc-8a98-19526ebef2ae" />
<img width="1600" height="1000" alt="product-desktop webp" src="https://github.com/user-attachments/assets/d96dcb33-dc1a-482d-807d-07b115b7c028" />
<img width="1080" height="1440" alt="home-mobile webp" src="https://github.com/user-attachments/assets/32bc43cd-dff1-45aa-97a2-827f9760d0f2" />
<img width="1600" height="1000" alt="home-desktop webp" src="https://github.com/user-attachments/assets/fe434f2e-e636-48d0-8b03-97e4a3881740" />
<img width="1600" height="1000" alt="cart-desktop webp" src="https://github.com/user-attachments/assets/bfffa3ca-83bb-4a00-af29-098f60105db4" />
<img width="1600" height="1000" alt="about-desktop webp" src="https://github.com/user-attachments/assets/60a7da80-3f88-4567-96f4-1ed3238becd4" />

**On mobile**

<img src="screenshots/home-mobile.webp" width="24%" />
<img src="screenshots/product-mobile.webp" width="24%" />

## Built with

- React and Vite
- React Router for page routing
- Context API for the cart and quick view state
- lucide-react and react-simple-icons for icons
- Plain CSS (Flexbox, Grid, and media queries)
- Deployed on Vercel

## Project structure

```
src/
  components/   Navbar, Footer, ProductCard, ProductModal, CartDrawer,
                SearchOverlay, SortDropdown, GoToCartButton, Layout, Logo
  pages/        Home, Men, Women, About, Contact, ProductDetail, Checkout, Login
  Context/      CartContext, QuickViewContext
  data/         productData, sortOptions
```

## Run it locally

```bash
git clone https://github.com/preyemurph7/e-commerce-store.git
cd e-commerce-store
npm install
npm run dev
```

Then open the local address that Vite prints in the terminal.

## What I practised

- Building a site from reusable components
- Sharing state with Context and lifting state up
- Client-side routing with dynamic product pages
- Controlled forms and validation
- Responsive CSS
- Working with Git branches and pull requests

## Not built yet

A real backend, payment processing, user accounts, and saved reviews.

---

Built by Preye ([@preyemurph7](https://github.com/preyemurph7))
