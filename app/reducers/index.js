import {combineReducers} from 'redux';

//根据功能拆分成多个子reducer
import session from "./session_reducer";
import application from "./application_reducer";
import verification from "./verification_reducer";
import usersList from "./usersList_reducer";
import userInfo from "./userInfo_reducer";
import passwordChange from "./passwordChange_reducer";

const rootReducer = combineReducers({ //合并所有reducers
  session,
  application,
  verification,
  usersList,
  userInfo,
  passwordChange
});

export default rootReducer;
