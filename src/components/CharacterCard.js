import React from "react";
import { StyledImage, StyledCard, StyledText } from '../styles/Styles';

export default function CharacterCard(props) {
  const { img, name } = props;
  return (
    <div className='character-card'>
      <StyledCard>
        <StyledImage src={img} alt={`Image of ${name}`} />
          <StyledText>{name}</StyledText>
      </StyledCard>
    </div>
  );
}
