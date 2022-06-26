import Loading from './../assets/loading.gif';
import React from 'react'
import "./../styles/loader.scss";
import Logo from './Logo';
export default function Loader() {
  return (
    <div className="loaderContainer">
        <Logo/> &nbsp;&nbsp;
        <img className="loadSpinner" src={Loading} style={{width:"20px",height:"20px"}} alt="loading"></img>
    </div>
  )
}
