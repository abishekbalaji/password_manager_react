import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase";
import { createAction } from "../../utils/helpers/createAction";
import USER_REDUCER_TYPES from "./userTypes";

export const fetchCurrentUserStart = () =>
  createAction(USER_REDUCER_TYPES.FETCH_CURRENT_USER_START);

export const fetchCurrentUserSuccess = (user) =>
  createAction(USER_REDUCER_TYPES.FETCH_CURRENT_USER_SUCCESS, user);

export const fetchCurrentUserFailed = (error) =>
  createAction(USER_REDUCER_TYPES.FETCH_CURRENT_USER_FAILED, error);

export const signInAuthWithGoogleAsync = () => async (dispatch) => {
  dispatch(fetchCurrentUserStart());
  try {
    const user = await signInWithGooglePopup();
    if (user) {
      await createUserDocument(user.user);
    }
    dispatch(fetchCurrentUserSuccess(user.user));
  } catch (error) {
    console.log(error);
    dispatch(fetchCurrentUserFailed(error));
  }
};

export const signUpWithEmailAndPasswordAsync =
  (email, password, displayName) => async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      if (user) {
        await createUserDocument(user.user, { displayName });
      }
      dispatch(fetchCurrentUserSuccess(user.user));
    } catch (error) {
      console.log(error);
      dispatch(fetchCurrentUserFailed(error));
    }
  };

export const signInWithEmailAndPasswordAsync =
  (email, password) => async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      const user = await signInAuthWithEmailAndPassword(email, password);
      dispatch(fetchCurrentUserSuccess(user.user));
    } catch (error) {
      console.log(error);
      dispatch(fetchCurrentUserFailed(error));
    }
  };

export const signOutAsync = () => async (dispatch) => {
  dispatch(fetchCurrentUserStart());
  try {
    await signOutUser();
    dispatch(fetchCurrentUserSuccess(null));
  } catch (error) {
    console.log(error);
    dispatch(fetchCurrentUserFailed(error));
  }
};
