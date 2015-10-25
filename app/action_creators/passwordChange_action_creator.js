import Types from "app/action_types/password";

import {
  passwordChange as passwordChangeCall
} from "app/api/api_calls";


export function passwordChange (oldPsw, newPsw) {
  return {
    type: Types.PASSWORDCHANGE,
    callAPI: () => passwordChangeCall({oldPsw, newPsw})
  }
}
