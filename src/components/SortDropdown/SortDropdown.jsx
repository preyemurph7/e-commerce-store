import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { sortOptions } from "../../data/sortOptions";
import "./SortDropdown.css";

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    onSortChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <button className="sort-dropdown-header" onClick={toggleDropdown}>
        <span>{currentSort}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <ul className="sort-dropdown-list">
          {sortOptions.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;