import {CREATE_MENU,GET_MENUS,ERROR,ADD_PICS_IN_MENU} from './../types';
const initial_state={}
export const menuReducer=(state=initial_state,action)=>{
    switch(action.type){
        case CREATE_MENU:
            return {menuData:action.payload,error:""}
        case GET_MENUS:
            return {menuData:action.payload,error:""}
        case ERROR:
            return {menu_error:action.payload,menuData:""}
        case ADD_PICS_IN_MENU:
            return {error:"",...state};
        default:
            return state;
    }
}
