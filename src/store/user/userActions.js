import { createAction } from "../../utils/helpers/createAction";
import USER_REDUCER_TYPES from "./userTypes";

export const setCurrentUser = (user) =>
  createAction(USER_REDUCER_TYPES.SET_CURRENT_USER, user);
