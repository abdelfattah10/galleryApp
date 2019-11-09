import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { StyledButtons } from '../styledComponents.js';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getParams } from '../utils.js';


function removeDuplicates(arr, comp) {
  const unique = arr
    .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e]).map(e => arr[e]);
   return unique;
}

class FilterBar extends Component {
  state = {
    activeNumber: 0
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      activeNumber: getParams(nextProps.location).category
    }
  }

  componentDidMount(){
    let activeNumber = getParams(this.props.location);
    this.setState({activeNumber: activeNumber.category});
  }

  renderHelper = () => {
    if(this.props.gallery.length === 0){
      return null;
    } else {
      return this.props.gallery.map((obj, k) => {
        return (
          <React.Fragment key={k}>
            <StyledButtons style={{backgroundColor: k+1 === parseInt(this.state.activeNumber) ? 'lightblue' : 'white'}} to={`/?category=${obj.albumId}`}>Album: {k+1}</StyledButtons>
            { this.props.gallery.length -1 === k && <StyledButtons to="/">Clear</StyledButtons> }
          </React.Fragment>
        )
      });
    }
  }

  render(){
    return (
      <div className="FilterBar">
        {this.renderHelper()}
      </div>
    )
  }
}


const mapStateToProps = ({gallery}) => {
  return {
    gallery: removeDuplicates(gallery, 'albumId')
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, actions)
)(FilterBar);
