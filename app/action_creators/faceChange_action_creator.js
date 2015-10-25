import Types from "app/action_types/face";

import {
  faceChange as faceChangeCall
} from "app/api/api_calls";


export function faceChange ({id, face}) {
  return {
    type: Types.FACECHANGE,
    callAPI: () => faceChangeCall({id, face})
  }
}
