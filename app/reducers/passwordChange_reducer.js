import Types         from "app/action_types/password";
import matchesAction from "./utils/matches_action";
import * as ih       from "./utils/immutable_helpers";

const initialState = ih.immutable({
  loading: false,
  passwordError: null
});


export default function passwordChangeReducer (state = initialState, action) {

  if (matchesAction(action, Types.PASSWORDCHANGE.request)) {
    state = ih.set(state, "loading", true);
  }

  if (matchesAction(action, Types.PASSWORDCHANGE.done)) {
    state = ih.set(state, "loading", false);
  }

  if (matchesAction(action, Types.PASSWORDCHANGE.fail)) {
    state = ih.set(state, "passwordError", action.apiError);
    state = ih.set(state, "loading", false);
  }

  return state;
}
