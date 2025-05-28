import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, placeholder = "Search anything…" }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
