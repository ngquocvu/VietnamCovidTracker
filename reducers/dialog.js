const dialogReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_DIALOG": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default dialogReducer;
