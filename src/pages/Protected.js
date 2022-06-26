import {useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

import {useCookies} from 'react-cookie';
import {useDispatch,useSelector} from 'react-redux';
import { get_profile } from './../redux/actions/userAction';
import Loader from './Loader';
import LandingPage from './LandingPage';


export default function Protected() {
  const selector=useSelector((state)=>state);
  const {auth}=selector;
  const [isAuth,setAuth]=useState(null);
  const dispatch=useDispatch();
  const [cookies]=useCookies("userDetails");
  

  useEffect(()=>{
    if(auth?.authenticated ){
      setAuth(true);
    }
    else{
      setAuth(false);
    }
  },[auth]);



  useEffect(()=>{
    if(isAuth){

      if(cookies?.userDetails){
        // console.log("With Cookies")
        const config={
          method: 'get',
          url: `${cookies?.userDetails?.userType}/${cookies?.userDetails?.id}`,
          headers: { 
            'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
          }
        }
  
        dispatch(get_profile(config));
      }
      else{
        // console.log("Without Cookies")

        const config={
          method: 'get',
          url: `${auth?.userType}/${auth?.cred?.id}`,
          headers: { 
            'Authorization': `Bearer ${auth?.cred?.token}`, 
          }
        }
  
        dispatch(get_profile(config));
      }


    }

  },[isAuth,auth?.cred?.id,auth?.cred?.token,dispatch,cookies?.userDetails,auth?.userType])


  

  if(isAuth){
      return <>
        <Navbar/>
        <div className="main" style={{marginTop:"50px"}}>
          <Outlet/>
        </div>
      </>
  }
  else{
      if(isAuth===false){
        return <LandingPage/>
      }
      else{
        return <Loader/>
      }
  }
 
}
