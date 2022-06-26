import api from './../../api';
import { GET_PROFILE, ERROR,UPDATE_PROFILE_IMG,UPDATE_PROFILE } from './../types';
import {set_progress} from './progressAction';
import {get_kitchen} from './kitchenAction';

// User work
const get_image = (config,configUrl, res, TYPE,dispatch) => {
    let headers = config.headers;
    if (res?.data?.data?.profilePicInfo?.fileKey) {
        setTimeout(async () => {
            let port=3000;
            configUrl = configUrl + "/" + res?.data?.data?.profilePicInfo?.fileKey;
            const newConfig = {
                method: "GET",
                headers: headers,
            }
            if(config?.url?.includes("host")){
                port=8000
            }
            try{
                let response = await fetch(`http://${process.env.REACT_APP_IP}:${port}/` + configUrl, newConfig);
                let blob = await response.blob()
                const urlCreator = window.URL || window.webkitURL;
                const imgUrl = urlCreator.createObjectURL(blob);
                const result = {
                    data: res?.data,
                    imgDataUrl: imgUrl,
                }
                dispatch({ type: TYPE, payload: result });
            }
            catch(error){
                // console.log(TYPE,error);
            }
       

        },0)

    }
    else {
        const result = {
            data: res?.data,
        }
        dispatch({ type: TYPE, payload: result });
    }
}
export const get_profile = (config) => {


    return async (dispatch) => {
        try {
            Object.assign(config,{timeout:0})
            const res = await api(config);
            let configUrl = config.url.split("/")[0] + "/image/" + config.url.split("/")[1];
            get_image(config,configUrl,res,GET_PROFILE,dispatch);


            if(res?.config?.url?.includes("host")){
                // Get Kitchen
                const newConfig={
                    method:"GET",
                    url:"kitchen/"+res?.config?.url?.split("host/")[1],
                    headers:{
                        'Authorization':res?.config?.headers?.Authorization,
                        'Content-Type': 'application/json'
                    },
                }
                dispatch(get_kitchen(newConfig));
            }
        }
        catch (error) {
            console.log("GET PROFILE",error);
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

export const update_profile_image = (config) => {
    return async (dispatch) => {
        let loaded=0;
        let total=0;
        try {
            
            Object.assign(config,{onUploadProgress:event=>{
                loaded=event.loaded;
                total=event.total;
                dispatch(set_progress(event.loaded,event.total));
            }})
            Object.assign(config,{timeout:0})
            const res = await api(config);
            let configUrl = config.url.split("/")[0] + "/image/" + config.url.split("/")[3];
            get_image(config,configUrl,res,UPDATE_PROFILE_IMG,dispatch);
        }
        catch (error) {
            if(error.code==="ECONNABORTED"){
                console.log(loaded,total)
                // dispatch(update_profile_image(config))
            }
            console.log("UPDATE PROFILE IMG:",error);
            dispatch({ type: ERROR, payload: error?.response?.data?.message });
            
           
        }
    }
}

export const update_profile=(config)=>{
    return async (dispatch)=>{
        try{
            Object.assign(config,{timeout:0})

            const res=await api(config);
            console.log("Profile Updated",res?.data?.data)

            const result = {
                data: res?.data,
            }
            dispatch({ type: UPDATE_PROFILE, payload: result });
        }
        catch(error){
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



