import {GET_MENUS,ERROR,ADD_PICS_IN_MENU} from './../types';
import api from './../../api';
import {set_progress} from './progressAction';

export const create_menu=(config)=>{
    return async (dispatch)=>{
        try{

            Object.assign(config,{timeout:0});
            
            const res=await api(config);
            const x=config?.url?.split("add");
            const new_url=x[0]+"get"+x[1];
            // console.log("CREATE menu",res)
            

            const newConfig={
                method: 'get',
                url: new_url,
                headers: { 
                  'Authorization': config?.headers?.Authorization 
                },
            }
            dispatch(get_menu_card(newConfig));

            
        }
        catch(error){
            // console.log("MENU ACTION CREATE :ERROR:",error)

        }
    }
}



export const get_menu_card=(config)=>{
    return async (dispatch)=>{
        try{
            Object.assign(config,{timeout:0});

            const res=await api(config);
            // console.log("Read Menu",res?.data?.data);
        
            dispatch({type:GET_MENUS, payload:res?.data});
        }
        catch(error){
            // console.log("MENU ACTION GET :ERROR:",error)
            dispatch({type:ERROR, payload:error?.response?.data?.message});

        }
    }
}


export const add_pics_in_menus=(config)=>{
    return async (dispatch)=>{
        let loaded=0;
        let total=0;
        try {
            
            Object.assign(config,{onUploadProgress:event=>{
                loaded=event.loaded;
                total=event.total;
                // console.log(loaded,total)
                dispatch(set_progress(event.loaded,event.total));
            }});
            Object.assign(config,{timeout:0})
            dispatch({type:ADD_PICS_IN_MENU})

            const x=config?.url?.split("/");
            const new_url=x[0]+"/get/"+x[3];
            const res = await api(config);
            // console.log("Updated Image",res?.data)


            const newConfig={
                method: 'get',
                url: new_url,
                headers: { 
                  'Authorization': config?.headers?.Authorization 
                },
            }
            dispatch(get_menu_card(newConfig));
        }
        catch(error){
            // console.log(error)
            dispatch({type:ERROR, payload:error?.response?.data?.message});
        }
    }
}

export const delete_menu=(config)=>{
    return async (dispatch)=>{
        try{

            Object.assign(config,{timeout:0});
            
            const res=await api(config);
            const x=config?.url?.split("/");
            console.log(x)
            const new_url=x[0]+"/get/"+x[3];
            console.log("NEW URL",new_url,res?.data)
            

            const newConfig={
                method: 'get',
                url: new_url,
                headers: { 
                  'Authorization': config?.headers?.Authorization 
                },
            }
            dispatch(get_menu_card(newConfig));

            
        }
        catch(error){
            console.log("MENU ACTION CREATE :ERROR:",error)

        }
    }
}