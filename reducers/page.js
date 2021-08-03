const pageReducer = (page = "none", action) => {
  switch (action.type) {
    case "SET": {
      return action.payload;
    }
    default:
      return page;
  }
};

export default pageReducer;
