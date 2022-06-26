import {LOG_IN,LOG_OUT,ERROR} from './../types';
const initial_state={};
export const authReducer=(state=initial_state, action)=>{
    switch(action.type) {
      case LOG_IN:
        return { ...state, authenticated: true,userType:action.userType,error:"",cred:action.cred };
      case LOG_OUT:
        return {authenticated: false,error:"",cred:"",userType:""};
      case ERROR:
        return { ...state,error: action.payload };
      default:
        return state;
    }
}
  