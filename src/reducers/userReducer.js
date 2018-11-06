const userReducer = (
  state = {
    name: "Max",
    age: 27
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      //state.lastValue.push(action.payload); // this is multable way
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      //state.lastValue.push(action.payload);
      break;
  }
  return state;
};

export default userReducer;
