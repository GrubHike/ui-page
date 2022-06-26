import "./../styles/navbar.scss";
import {useState,useEffect,useRef} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { log_out } from '../redux/actions/authAction';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

import {Settings,Notifications,BookOutlined,BarChart,Message,MenuBookOutlined,DashboardOutlined,Sort,Close} from '@material-ui/icons';



import defaultProfile from './../assets/defaultProfile.jpg';
export default function Navbar() {
  const dispatch=useDispatch();
  const [source,setSource]=useState("");
  const [progressValue,setProgressValue]=useState(0);
  const [toggleValue,setToggleValue]=useState(false);
  const dropContent=useRef(null);

  const {user,progress}=useSelector((state)=>state);
  const logout=()=>{
    dispatch(log_out());
  }

  useEffect(()=>{
    const imgUrl=user?.userData?.imgDataUrl;
    if(imgUrl){
      setSource(imgUrl);
    }
  },[user])


  useEffect(()=>{
    let value=Math.round((progress?.payload?.value)*100/(progress?.payload?.total));

    
    setProgressValue(parseInt(value));

  },[progress]);


  useEffect(()=>{
    if(progressValue===100){
      setProgressValue(0)
    }
  },[progressValue])

  useEffect(()=>{
    window.addEventListener('resize', (e)=>{
      if(window.innerWidth>=650){
        dropContent.current.style.display="flex";
      }
    });
  })
  const toggle=()=>{
    
    if(toggleValue){
      dropContent.current.style.display="flex";
    }
    else{
      dropContent.current.style.display="none";
    }
    setToggleValue(!toggleValue)
  }
  return (
    <div className="navbar-outer">
        <div className="navbar">
          <div className="navbar-left">
            <Logo/>
            <button onClick={()=>toggle()} className="menuBtn">
            {toggleValue?<Sort/>:<Close/>}
            </button>
          </div>
          <div className="navbar-right" ref={dropContent}>

            <NavLink to="/">
              <span><DashboardOutlined/></span>
              <p>Dashboard</p>
            </NavLink>
      
            <NavLink to="/profile">
              <span><Settings/></span>
              <p>Settings</p>
            </NavLink>

            <NavLink to="/notifications">
              <span><Notifications/></span>
              <p>Notifications</p>
            </NavLink>

            <NavLink to="/Orders">
              <span><BookOutlined/></span>
              <p>Orders</p>
            </NavLink>

            <NavLink to="/Analytics">
              <span><BarChart/></span>
              <p>Analytics</p>
            </NavLink>

            <NavLink to="/Messages">
              <span><Message/></span>
              <p>Messages</p>
            </NavLink>

            <NavLink to="/addMenus">
              <span><MenuBookOutlined/></span>
              <p>Menu</p>
            </NavLink>

            <div className="corners">
              <button onClick={()=>logout()} className="logout">Logout</button>
              <img src={source?source:defaultProfile} alt="ProfileImage" className="profileLogo" ></img>
            </div>
          
          </div>  

       
        </div>

        <div className="progressBar"
          style={{width:`${progressValue}%`}}
        ></div>
    </div>
  )
}
