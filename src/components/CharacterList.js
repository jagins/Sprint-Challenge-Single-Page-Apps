import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() 
{
  const [characters, setCharacters] = useState([]);

  useEffect(() => 
  {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>
    {
      const chars = response.data.results;
      setCharacters(chars);
    })
    .catch(err => 
    {
      console.log("Something went wrong Morty: ", err);
    })
  }, []);

  return (
    <section className="character-list">
      {characters.map(char => (
          <CharacterCard key={char.id} img={char.image} name={char.name}/>
        ))}
    </section>
  );
}
