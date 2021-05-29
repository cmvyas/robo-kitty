  import React from 'react';
import './search-field.css';
  export const SearchBox = ({placeholder,handleChange})=>
  {
     return(
      <div >
          <input className="search" type="search" placeholder={placeholder}
          onChange={handleChange}
          ></input>

      </div>

     ); 
  }