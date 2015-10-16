import {createStore, applyMiddleware} from 'redux';
import createLogger                   from 'redux-logger';
import rootReducer                    from 'app/reducers';
import asyncActionsMiddleware         from "app/middleware/async_actions_middleware";


let createStoreWithMiddleware = applyMiddleware(
  asyncActionsMiddleware,   //装载异步action中间件
  createLogger({  //todo 
    predicate: (getState, action) => process.env.NODE_ENV !== "production"
  })
)(createStore);


export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // 为reducers开启webpack的模块热重载
    module.hot.accept('app/reducers', () => {
      const nextRootReducer = require('app/reducers');
      store.replaceReducer(nextRootReducer);  //注意这个replaceReducer方法
    });
  }

  return store;
}
