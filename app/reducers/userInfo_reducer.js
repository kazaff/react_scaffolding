import Types         from "app/action_types/userInfo";
import matchesAction from "./utils/matches_action";
import * as ih       from "./utils/immutable_helpers";

const initialState = ih.immutable({
  loading: false,
  info: null,
  userError: null
});


export default function userInfoReducer (state = initialState, action) {

  if (matchesAction(action, Types.USERINFO.request)) {
    state = ih.set(state, "loading", true);
  }

  if (matchesAction(action, Types.USERINFO.done)) {

    state = ih.set(state, "loading", false);
    state = ih.set(state, "info", action.apiResponse);
  }

  if (matchesAction(action, Types.USERINFO.fail)) {
    state = ih.set(state, "userError", action.apiError);
    state = ih.set(state, "loading", false);
  }

  return state;
}
