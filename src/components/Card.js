import React from 'react';
import { StyledCard } from '../styledComponents.js';

function Card(props){
  return (
    <StyledCard to={`/photo/${props.photo.id}`}>
      <div style={{backgroundImage: `url(${props.photo.url})`, height: '300px', backgroundRepeat: 'no-repeat', borderRadius: '0.5%'}}>
      </div>
    </StyledCard>
  )
}

export default Card;
