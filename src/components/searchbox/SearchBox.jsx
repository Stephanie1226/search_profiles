import React from 'react';
import './Searchbox.styles.css'

const SearchBox = ({ searchChange, placeholder }) => {
  return (
    <div className='pa1'>
      <input
        className="searchbox-style"
        type='search'
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;