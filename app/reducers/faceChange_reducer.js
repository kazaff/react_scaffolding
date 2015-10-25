import Types         from "app/action_types/face";
import matchesAction from "./utils/matches_action";
import * as ih       from "./utils/immutable_helpers";
import {getUser, storeUser}  from "app/api/auth_token";

const initialState = ih.immutable({
  loading: false,
  faceError: null
});


export default function faceChangeReducer (state = initialState, action) {

  if (matchesAction(action, Types.FACECHANGE.request)) {
    state = ih.set(state, "loading", true);
  }

  if (matchesAction(action, Types.FACECHANGE.done)) {
    state = ih.set(state, "loading", false);
    let user = getUser();
    user.face = action.apiResponse.face;
    storeUser(user);
  }

  if (matchesAction(action, Types.FACECHANGE.fail)) {
    state = ih.set(state, "faceError", action.apiError);
    state = ih.set(state, "loading", false);
  }

  return state;
}
