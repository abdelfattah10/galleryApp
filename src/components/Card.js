import React from 'react';
import { StyledCard } from '../styledComponents.js';

// class Card extends Component {
//
//   render(){
//     const { photo } = this.props;
//     return (
//       <StyledCard to={`/photo/${photo.id}`}>
//         <div style={{backgroundImage: `url(${photo.url})`, height: '300px', backgroundRepeat: 'no-repeat', borderRadius: '0.5%'}}>
//         </div>
//       </StyledCard>
//     )
//   }
// }

function Card(props){
  return (
    <StyledCard to={`/photo/${props.photo.id}`}>
      <div style={{backgroundImage: `url(${props.photo.url})`, height: '300px', backgroundRepeat: 'no-repeat', borderRadius: '0.5%'}}>
      </div>
    </StyledCard>
  )
}


export default Card;
