import {GET_PROFILE,UPDATE_PROFILE_IMG,ERROR, UPDATE_PROFILE} from './../types';
const initial_state={};
export const userReducer=(state=initial_state, action)=>{
    switch(action.type) {
      case GET_PROFILE:
        return { ...state,error:"",userData:action.payload };
      case UPDATE_PROFILE_IMG:
        return {...state,error:"",userData:action.payload};
      case UPDATE_PROFILE:
        return {...state,error:"",userData:action.payload};
      case ERROR:
        return { ...state,error: action.payload };

      default:
        return state;
    }
    
}
  