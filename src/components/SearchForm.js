import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
export default function SearchForm(props) 
{
  const {characterArray} = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event =>
  {
    setSearchTerm(event.target.value);
  }

  useEffect(() =>
  {
    const results = characterArray.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <section className="search-form">
     <form>
       <label htmlFor='search'>Search</label>
       <input id='search' type='text' onChange={handleChange}/>
     </form>

     <div className='character-result-list'>
        {/* {searchResults.map(char => (
          // <CharacterCard key={char} img={char.image} name={char.name}/>
        ))} */}
     </div>
    </section>
  );
}
