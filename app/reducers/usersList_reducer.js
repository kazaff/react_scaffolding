import Types         from "app/action_types/usersList";
import matchesAction from "./utils/matches_action";
import * as ih       from "./utils/immutable_helpers";

const initialState = ih.immutable({
  loading: false,
  keyword: null,
  users: null,
  total: 0,
  usersError: null,
});


export default function usersListReducer (state = initialState, action) {

  if (matchesAction(action, Types.USERSLIST.request)) {
    state = ih.set(state, "loading", true);
  }
  else if (matchesAction(action, Types.USERSLIST.done)) {
    state = ih.set(state, "loading", false);
    state = ih.set(state, "users", action.apiResponse.usrs);
    state = ih.set(state, "total", action.apiResponse.total);
  }
  else if (matchesAction(action, Types.USERSLIST.fail)) {
    state = ih.set(state, "usersError", action.apiError);
    state = ih.set(state, "loading", false);
  }
  else if (matchesAction(action, Types.USERSLIST_SEARCHKEY)) {
    state = ih.set(state, "keyword", action.keyword);
  }
  else if (matchesAction(action, Types.USERSTATUS.request)) {
    state = ih.set(state, "users."+action.payload.index+".account", "changing"); //todo
  }
  else if (matchesAction(action, Types.USERSTATUS.done)) {
    state = ih.set(state, "users."+action.payload.index+".account", action.apiResponse.status); //todo
  }
  else if (matchesAction(action, Types.USERSTATUS.fail)) {
    //todo
  }
  else if (matchesAction(action, Types.USERDELETE.request)){
    state = ih.set(state, "users."+action.payload.index+".account", "deleteing"); //todo
  }
  else if (matchesAction(action, Types.USERDELETE.done)) {
    let userList = state.users.flatMap(function(row, index){
      if(index == action.payload.index){
        return [];
      }else{
        return row;
      }
    });

    state = ih.set(state, "users", userList);
  }
  else if (matchesAction(action, Types.USERDELETE.fail)) {
    //todo
  }

  return state;
}
