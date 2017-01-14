import React from 'react';
import EditButton from './buttons/EditButton'
import CancelButton from './buttons/CancelButton'
import DeleteButton from './buttons/DeleteButton'

export default function() {

  return (
    <div className="edit-recipe-box">
      <h3>Edit Recipe (invisible)</h3>

      <h4>Change name</h4>
      <input />

      <h4>Edit Ingredients</h4>
      <input />
      <br/>
      <EditButton />
      <DeleteButton />
      <CancelButton />
    </div>
  );
}
