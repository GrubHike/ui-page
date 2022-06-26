import { ERROR,EDIT_KITCHEN,GET_KITCHEN,UPLOAD_PICS_IN_KITCHEN} from './../types';
import api from './../../api';
import {set_progress} from './progressAction';

export const edit_kitchen=(config)=>{
    return async (dispatch)=>{
        try{
            Object.assign(config,{timeout:0});
            const res=await api(config);
            // console.log(res)
            dispatch({type:EDIT_KITCHEN,payload:res?.data})
        }
        catch(error){
            // console.log(error);
            if(error?.code==="ECONNABORTED"){
               
                dispatch({ type:ERROR,payload:"Network Issues,Please try again"})
     
            }
            else{
                if (error?.response?.data?.error?.message) {
                    dispatch({ type: ERROR, payload: error?.response?.data?.error?.message });
                }
                else {
                    dispatch({ type: ERROR, payload: error?.response?.data?.message })
                }
            }
        }
    }
}


export const get_kitchen=(config)=>{
    return async (dispatch)=>{
        try{
            Object.assign(config,{timeout:0});
            const res=await api(config);
            // console.log("GET_KITCHEN",res)
            dispatch({type:GET_KITCHEN,payload:res?.data})
        }
        catch(error){
            // console.log(error);
            if(error?.code==="ECONNABORTED"){
               
                dispatch({ type:ERROR,payload:"Network Issues,Please try again"})
     
            }
            else{
                if (error?.response?.data?.error?.message) {
                    dispatch({ type: ERROR, payload: error?.response?.data?.error?.message });
                }
                else {
                        dispatch({ type: ERROR, payload: error?.response?.data?.message })
                }
            }
        }
    }
}


export const update_kithen_image = (config) => {

    return async (dispatch) => {
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
            const res = await api(config);
            // console.log("DATA",res?.data)
            dispatch({type:UPLOAD_PICS_IN_KITCHEN,payload:res?.data})

            const uid=config?.url?.split("/")[2];
            const newConfig={
                "method": 'get',
                "url":"kitchen/"+uid,
                "headers": { 
                  'Authorization': config?.headers?.Authorization,
                },
            }
            // console.log(newConfig);
            dispatch(get_kitchen(newConfig));


            
        }
        catch (error) {
    
            // console.log(UPLOAD_PICS_IN_KITCHEN,error);
            dispatch({ type: ERROR, payload: error?.response?.data?.message });
            
           
        }
    }
}
