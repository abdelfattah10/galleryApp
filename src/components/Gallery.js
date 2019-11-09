import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from './Card.js';
import FilterBar from './FilterBar.js';
import * as actions from '../actions';
import { getParams } from '../utils.js';


function filterByCategoty(gallery, categoryID){
  if(categoryID){
    return gallery.filter( photo => photo.albumId == categoryID);
  } else {
    return gallery;
  }
}

// class Gallery extends Component {
//
//   componentDidMount(){
//     this.props.requestGallery();
//   }
//
//   render(){
//     return (
//       <div className="Container">
//         <FilterBar/>
//         {this.props.gallery.length > 0 ? this.props.gallery.map( photo => <Card key={photo.id} photo={photo}/> ) : null}
//       </div>
//     )
//   }
// }

function Gallery(props){

  useEffect(() => {
    props.requestGallery()
  }, []);

  return (
    <div className="Container">
      <FilterBar/>
      {props.gallery && props.gallery.length > 0 ? props.gallery.map( photo => <Card key={photo.id} photo={photo}/> ) : null}
    </div>
  )
}



const mapStateToProps = ({gallery}, props) => {
  let { category } = getParams(props.location);
  let filteredGallery = filterByCategoty(gallery, category);
  return {
    gallery: filteredGallery
  }
}


export default connect(mapStateToProps, actions)(Gallery);
