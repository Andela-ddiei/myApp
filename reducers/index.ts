import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import { users } from './users';

const reducer = combineReducers({
  router: routerReducer,

  users (state: Array<any> = [], action: { type: String, data?: Array<any>}) {
    switch (action.type) {
      case 'GOTTEN_USERS':
        return action.data
      default:
        return state;
    }
  }
});
export default reducer

