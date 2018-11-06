const mathReducer = (
  state = {
    result: 1,
    lastValues: [],
    username: "Ken"
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload] // this immutable way
      };
      //state.lastValue.push(action.payload); // this is multable way
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      //state.lastValue.push(action.payload);
      break;
  }
  return state;
};

export default mathReducer;
