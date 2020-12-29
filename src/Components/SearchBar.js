import React from "react";
import "./SearchBar.css";

export const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <label className="container">
      <div className="bar-and-text">
        Find your breed:
        <form action="search">
          <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
          />
        </form>
      </div>
    </label>
  );
};

export default SearchBar;
