import USER_REDUCER_TYPES from "./userTypes";

const INITIAL_USER_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REDUCER_TYPES.FETCH_CURRENT_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REDUCER_TYPES.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    case USER_REDUCER_TYPES.FETCH_CURRENT_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
