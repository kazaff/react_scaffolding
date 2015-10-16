import SessionTypes  from "app/action_types/session";
import matchesAction from "./utils/matches_action";
import * as ih       from "./utils/immutable_helpers";

//定义初始化状态
const initialState = ih.immutable({
});

export default function applicationReducer (state = initialState, action) {
  return state;
}
