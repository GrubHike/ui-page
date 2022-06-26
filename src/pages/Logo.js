import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./../styles/logo.scss";
export default function Logo() {
  const navigate=useNavigate();
  return <>
    <p onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
      <strong>Grub</strong>
      hike<strong>.com</strong>
    </p>
  </>
}
