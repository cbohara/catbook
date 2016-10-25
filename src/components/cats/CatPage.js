import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as catActions from '../../actions/catActions';
import CatList from './CatList';

class CatPage extends React.Component {
  render() {
    return()
  }
}

class CatsPage extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h1>Cats</h1>
        <div className="col-md-4">
          <CatList cats={this.props.cats} />
        </div>
      </div>
    );
  }
}

CatPage.propTypes = {
  cats: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatPage);
