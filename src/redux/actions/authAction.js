import {LOG_IN,LOG_OUT,ERROR} from './../types';
import Cookies from 'js-cookie';
import api from './../../api';
import jwt from 'jwt-decode';

export const log_in=(userType,config)=>{
    return async (dispatch)=>{
        try{
            Object.assign(config,{timeout:0})

            const res=await api(config);
            
            // console.log(res)
            const reqsCred={userType:userType,token:res?.data?.token,id:jwt(res?.data?.token)._id};
            console.log(reqsCred)
            Cookies.set("userDetails",JSON.stringify(reqsCred),{expires:new Date(jwt(res?.data?.token).exp * 1000 )})
            dispatch({type:LOG_IN,userType:userType,cred:reqsCred});
            window.location.href="/";
        }
        catch(error){
            console.log(error);
            if(error?.code==="ERR_NETWORK"){
                dispatch({type:ERROR,payload:error?.response?.data})
            }
            else{
                if(error.request.status===0 && error.request.readyState===4){
                    dispatch(log_in(userType,config));
                }
                else{
                    if(error?.response?.data?.error?.message){
                        dispatch({type:ERROR,payload:error?.response?.data?.error?.message});
                    }
                    else{
                        dispatch({type:ERROR,payload:error?.response?.data?.message})
                    }
                }
            }
        

        }
    }
}

export const log_out=()=>{
    Cookies.remove("userDetails");
    return {
        type:LOG_OUT,
    }
}


