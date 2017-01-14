export default (state = [], action) => {
  if (action.type === "ADD_RECIPE") {
    return "DEC!";
  } else {
    return state;
  }

};
