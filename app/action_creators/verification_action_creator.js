import Types from "app/action_types/verification";

import {
  verification as verificationCall
} from "app/api/api_calls";


export function verification () {
  return {
    type: Types.VERIFICATION,
    callAPI: () => verificationCall()
  }
}
