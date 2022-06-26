import {SET_PROGRESS} from './../types';
const initial_state={
};
export const progressReducer=(state=initial_state, action)=>{
    switch(action.type) {
      case SET_PROGRESS:
        return { payload:action.payload};
      default:
        return state;
    }
    
}
  