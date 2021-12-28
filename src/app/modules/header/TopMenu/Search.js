import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
  return (
    <form className="top-menu__form">
      <input type="search" placeholder="Tìm kiếm ở đây" aria-label="Search" />
      <button className="submit" type="submit">
        <FontAwesomeIcon icon={faSearch} color="white" />
      </button>
    </form>
  )
}

export default Search;
