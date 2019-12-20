import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import {StyledDiv} from '../styles/Styles';

export default function SearchForm(props) 
{
  const {array} = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 

  useEffect(() =>
  {
    const results = array.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

  }, [searchTerm, array]);

  const handleChange = event =>
  {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="search-form">
     <form>
       <label htmlFor='search'>Search</label>
       <input id='search' type='text' value={searchTerm} onChange={handleChange}/>
     </form>

     <StyledDiv className='character-result-list'>
        {searchResults.map(char => (
          <CharacterCard key={char.id} img={char.image} name={char.name}/>
        ))}
     </StyledDiv>
    </section>
  );
}
