import {combineReducers} from 'redux';

//根据功能拆分成多个子reducer
import session from "./session_reducer";
import application from "./application_reducer";

const rootReducer = combineReducers({ //合并所有reducers
  session,
  application
});

export default rootReducer;
