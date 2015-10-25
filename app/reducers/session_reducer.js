import Types         from "app/action_types/session";
import {getUser, storeToken, storeUser}  from "app/api/auth_token";
import matchesAction from "./utils/matches_action";
import * as ih       from "./utils/immutable_helpers";

const initialState = ih.immutable({
  authenticating: false,
  authenticationError: null,
  user: getUser(),
});


export default function sessionReducer (state = initialState, action) {

  if (matchesAction(action, Types.AUTHENTICATE.request)) {
    state = ih.set(state, "authenticating", true);
  }

  else if (matchesAction(action, Types.AUTHENTICATE.done)) {
    const token = action.apiResponse.session;
    storeToken(token);
    storeUser(action.apiResponse);

    state = ih.set(state, "authenticating", false);
    state = ih.set(state, "user", action.apiResponse);
  }

  else if (matchesAction(action, Types.AUTHENTICATE.fail)) {
    state = ih.set(state, "authenticationError", action.apiError);
    state = ih.set(state, "authenticating", false);
  }

  else if (matchesAction(action, Types.INFOCHANGE)) {
    state = ih.set(state, "user", getUser());
  }

  return state;
}
