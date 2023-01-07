import USER_REDUCER_TYPES from "./userTypes";

const INITIAL_USER_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REDUCER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
