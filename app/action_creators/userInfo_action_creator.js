import Types from "app/action_types/userInfo";

import {
  userInfo as userInfoCall
} from "app/api/api_calls";


export function user (id) {
  return {
    type: Types.USERINFO,
    callAPI: () => userInfoCall(id)
  }
}
