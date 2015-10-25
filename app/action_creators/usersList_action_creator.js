import Types from "app/action_types/usersList";

import {
  usersList as usersListCall,
  userStatus as userStatusCall,
  userDelete as userDeleteCall,
} from "app/api/api_calls";


export function usersList (page, size, keyword) {
  return {
    type: Types.USERSLIST,
    callAPI: () => usersListCall({page, size, keyword})
  }
}

export function search (keyword) {
  return {
    type: Types.USERSLIST_SEARCHKEY,
    keyword: keyword
  }
}

export function userStatus (index, id, newStatus) {
  return {
    type: Types.USERSTATUS,
    payload: {index: index},
    callAPI: () => userStatusCall(id, newStatus)
  }
}

export function userDelete (index, id) {
  return {
    type: Types.USERDELETE,
    payload: {index: index},
    callAPI: () => userDeleteCall(id)
  }
}
