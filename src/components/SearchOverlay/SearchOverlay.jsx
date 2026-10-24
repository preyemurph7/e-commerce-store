import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";
import { products } from "../../data/productData";
import "./SearchOverlay.css";

const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const trimmed = query.trim().toLowerCase();

  const results = trimmed
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase() === trimmed ||
          p.colorAvailable.some((c) => c.toLowerCase().includes(trimmed))
      )
    : [];

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-row">
          <Search size={20} />
          <input
            autoFocus
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        {trimmed && (
          <div className="search-results">
            {results.length === 0 ? (
              <p className="search-empty">No products found for "{query}".</p>
            ) : (
              results.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="search-result"
                  onClick={onClose}
                >
                  <img src={p.image} alt={p.title} />
                  <div>
                    <p className="search-result-title">{p.title}</p>
                    <p className="search-result-meta">{p.category}</p>
                  </div>
                  <p className="search-result-price">₦{p.price.toLocaleString()}</p>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;