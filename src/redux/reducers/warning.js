import { SHOW_WARNING } from "../constants/constants";

const initialState = {
  warning: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WARNING:
      return {
        ...state,
        warning: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
