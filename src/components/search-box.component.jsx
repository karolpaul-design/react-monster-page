import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="pa2 mb3">
    <input
      className="pa3 ba b--green bg-lightest-blue "
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
