import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

function Photo(props){

  useEffect(() => {
    props.requestPhoto(props.match.params.photo_id)
  }, []);

  return (
    <div className="PhotoSection">
      {props.selected.url && <img src={`${props.selected.url}`} style={{width: '100%', maxWidth: '600px'}} alt=""/>}
      <div style={{ float: 'right', marginRight: '20%'}}>
        <h3>{props.selected.title}</h3>
      </div>
    </div>
  )
}


const mapStateToProps = ({selected}) => {
  return {
    selected
  }
}

export default connect(mapStateToProps, actions)(Photo);
