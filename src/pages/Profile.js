import React from 'react'
import {useSelector} from 'react-redux';
import GuestProfile from './../pages/guest/GuestProfile';
import HostProfile from './../pages/host/HostProfile';

export default function Profile() {
  const selector=useSelector((state)=>state.auth);
  if(selector?.userType==="guest"){
      return (
          <GuestProfile/>
      )
  }
  else{
    return (
        <HostProfile/>
      )
  }

}
