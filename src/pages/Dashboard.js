import React from 'react'
import {useSelector} from 'react-redux';
import GuestDashboard from './../pages/guest/GuestDashboard';
import HostDashboard from './../pages/host/HostDashboard';




export default function Dashboard() {
  const selector=useSelector((state)=>state.auth);
  if(selector?.userType==="guest"){
      return (
          <GuestDashboard/>
      )
  }
  else{
    return (
        <HostDashboard/>
      )
  }

}
