import "./../../styles/login.scss";
import { useState,useEffect} from 'react'
import {log_in} from './../../redux/actions/authAction';
import {useDispatch,useSelector} from 'react-redux';
import Logo from './../Logo';
import {Link} from 'react-router-dom';
import Loading from './../../assets/loading.gif';



export default function Login() {
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");

  const [password,setPassword]=useState("");
  const [userType,setUserType]=useState("guest");
  
  const dispatch=useDispatch();
  const auth=useSelector((state)=>state?.auth);
  const [isLoad,setIsLoad]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let data;
    setIsLoad(true);
    if(userType==="guest"){
      data={
        "email":email,
        "password":password,
      }
    }
    else{
      data={
        "userName":username,
        "password":password,
      }
    }
    
    const config={
      method:"POST",
      url:`${userType}/login`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data:JSON.stringify(data)
    }

    dispatch(log_in(userType,config));
  }

  useEffect(()=>{
    setIsLoad(false);
  },[auth]);

 


  return (
    <div className="login">

      <div className="login-left"></div>
      <div className="login-right">
        <Logo/>

        <form onSubmit={e=>handleSubmit(e)}>
          <h3>Login</h3>
          <h5>Login to Your Account</h5>
          <p className="quotes">
            Thank you for comming back on grubhike,lets access our services for free of coast.
          </p>

          <p className="dont">Choose your user preference</p>
          <div className="radios">
            <span>
              <label htmlFor="guest">Guest</label>
              <input type="radio" checked={userType==="guest"?true:false} value="guest" onChange={(e)=>setUserType(e.target.value)} id="guest" name="typeUser"></input>
            </span>

            <span>
              <label htmlFor="host">Host</label>
              <input type="radio" value="host" onChange={(e)=>setUserType(e.target.value)} id="host" name="typeUser"></input>
            </span>
          </div>


          {
            userType==="host"?
            <input type="text" className="field"  placeholder="Username here" onChange={(e)=>setUsername(e.target.value)}></input>
            :
            <input type="email" className="field"  placeholder="Email here" onChange={(e)=>setEmail(e.target.value)}></input>
          }
          <input type="password" className="field" placeholder="Password here" onChange={(e)=>setPassword(e.target.value)}></input>
          


          <button type="submit" className="field btn">Login</button>
          <p className="dont">Don't have an account?<Link to="/signup"> Sign Up</Link></p>
          {
            isLoad?<span className="spanner">Validating. . . &nbsp; <img src={Loading} className="loadSpinner " alt="load"></img></span>:
            <p className="dont red">
            {(auth?.error)?<>Error::({auth?.error})</>:""}
            </p>
          }
        </form>
      </div>

    </div>
  )
}
