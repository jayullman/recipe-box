export default (state = "", action) => {
  if (action.type === "CHANGE_VIEW") {
    return "Do something different here";
  } else {
    return state;
  }

};
