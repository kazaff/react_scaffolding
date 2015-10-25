import Types         from "app/action_types/verification";
import matchesAction from "./utils/matches_action";
import * as ih       from "./utils/immutable_helpers";

const initialState = ih.immutable({
  verifying: false,
  verificationImage: null,
  verificationKey: null,
  verificationError: null
});


export default function verificationReducer (state = initialState, action) {

  if (matchesAction(action, Types.VERIFICATION.request)) {
    state = ih.set(state, "verifying", true);
  }

  if (matchesAction(action, Types.VERIFICATION.done)) {

    state = ih.set(state, "verifying", false);
    state = ih.set(state, "verificationImage", action.apiResponse.code);
    state = ih.set(state, "verificationKey", action.apiResponse.key);
  }

  if (matchesAction(action, Types.VERIFICATION.fail)) {
    state = ih.set(state, "verificationError", action.apiError);
    state = ih.set(state, "verifying", false);
  }

  return state;
}
