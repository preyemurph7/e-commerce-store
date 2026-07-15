import { useState } from "react"
import { ChevronDown } from "lucide-react"
import "./SortDropdown.css"

const sortOptions = [
  "Default sorting",
  "Sort by average rating",
  "Sort by latest",
  "Sort by price: low to high",
  "Sort by price: high to low",
]

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  }

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  }

  return (
    <div className="sort-dropdown">
      <button className="sort-dropdown-header" onClick={toggleDropdown}>
        <span>{selected}</span>
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
  )
}

export default SortDropdown