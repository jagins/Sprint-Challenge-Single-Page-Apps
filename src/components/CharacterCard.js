import React from "react";

export default function CharacterCard(props) 
{
  const {img, name} = props;
  return (
    <div className='character-card'>
      <img src={img}/>
      <h3>{name}</h3>
    </div>
  );
}
