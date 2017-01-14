// this module will be invisible unless the
// selected by the currentView in the store

// box will remain visible during testing

import React from 'react';

export default function() {

  return (
    <div className="new-recipe-box">
      <h3>Add a New Recipe (invisible)</h3>

      <h4>Recipe</h4>
      <input />

      <h4>Ingredients</h4>
      <input />

    </div>
  );
}
