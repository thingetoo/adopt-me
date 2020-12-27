import React from "react";

const SearchBar = () => {
  return (
    <div>
      <label className="container">
        <div className="bar-and-text">
          Find your breed:
          <form action="search">
            <input type="text" name="search" id="dog-search" />
          </form>
        </div>
      </label>
    </div>
  );
};

export default SearchBar;
