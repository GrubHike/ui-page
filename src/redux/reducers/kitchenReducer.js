import {EDIT_KITCHEN,GET_KITCHEN,ERROR} from './../types';
const initial_state={}
export const kitchenReducer=(state=initial_state,action)=>{
    switch(action.type){
        case EDIT_KITCHEN:
            return {...state,kitchen_error:"",kitchenData:action.payload};
        case GET_KITCHEN:
            return {...state,kitchen_error:"",kitchenData:action.payload};
        case ERROR:
            return { ...state,kitchen_error: action.payload,kitchenData:"" };
        default:
            return state;
    }
}