import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {userReducer} from './userReducer';
import {progressReducer} from './progressReducer';
import {kitchenReducer} from './kitchenReducer';
import {menuReducer} from './menuReducer';




const appReducer=combineReducers({
    auth:authReducer,
    user:userReducer,
    progress:progressReducer,
    kitchen:kitchenReducer,
    menu:menuReducer,
});

  
const reducers = (state, action) => {
  // console.log("CALLED",state,action.type)
    if (action.type ==="LOG_OUT") {
      setTimeout(() => {
        window.location.href="/";
      }, 0);
      return appReducer({}, action)
    }
  
    return appReducer(state, action)
}
export default reducers;


