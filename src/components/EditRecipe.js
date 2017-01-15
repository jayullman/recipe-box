// TODO: Delete this module - no longer needed

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditButton from './buttons/EditButton'
import CancelButton from './buttons/CancelButton'
import DeleteButton from './buttons/DeleteButton'

import { editRecipe, changeView } from '../actions/index';



class EditRecipe extends React.Component {

  editRecipe = () => {
    this.props.editRecipe();
  }


  render() {
    return (
      <div className="edit-recipe-box">
        <h3>Edit Recipe (invisible)</h3>

        <h4>Change name</h4>
        <input />

        <h4>Edit Ingredients</h4>
        <input />
        <br/>
        <button onClick={this.editRecipe}>Edit</button>

        <DeleteButton />
        <CancelButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    currentView: state.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editRecipe: editRecipe,
    changeView: changeView
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);
