import {SET_PROGRESS } from './../types';

export const set_progress=(value,total)=>{
    return {
        type:SET_PROGRESS,
        payload:{
            value:value,
            total:total
        }
    }
}