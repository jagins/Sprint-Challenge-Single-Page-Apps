import React, { useState } from "react";

export default function SearchForm(props) 
{
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event =>
  {
    setSearchTerm(event.target.value);
  }
  return (
    <section className="search-form">
     <form>
       <label htmlFor='search'>Search</label>
       <input id='search' type='text' onChange='handleChange'/>
     </form>
    </section>
  );
}
