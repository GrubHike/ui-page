import "./../../styles/signup.scss";

import {useState} from 'react'
import api from './../../api';
import axios from 'axios';
import Logo from './../Logo';
import {Link,useNavigate} from 'react-router-dom';
import Loading from './../../assets/loading.gif';

export default function Signup() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [dob,setDob]=useState("");
  const [phoneNum,setPhoneNum]=useState("");
  const [gender,setGender]=useState("male");
  const [userType,setUserType]=useState("guest");


  const [error,setError]=useState(null);
  const [isLoad,setIsLoad]=useState(false);

  const navigate=useNavigate();
  const callApi=(config)=>{
    setIsLoad(true)
    api.defaults.timeout=0;
    api(config).then((response)=>{
      console.log(response)
      setError("");
      navigate("/login");
    }).catch((error)=>{
      console.log(error)
       setError(error?.response?.data?.error?.message)
        
    }).then(()=>{
      setIsLoad(false);
    });





  }


  const registerUser=(e)=>{
    e.preventDefault()
    const d=new Date(dob);
    const config={
      method:"POST",
      url:userType+"/signup",
      headers: { 
        'Content-Type': 'application/json'
      },
    }
    const data={
      "email":email,
      "password":password,
      "firstName":firstName?firstName[0].toUpperCase()+firstName.slice(1):"",
      "lastName":lastName?lastName[0].toUpperCase()+lastName.slice(1):"",
      "phoneNum":phoneNum,
      "dob":`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`,
      "gender":gender,
    }

    if(userType==="host"){
      Object.assign(data,{"userName":email.split("@")[0]})
    }

    Object.assign(config,{"data":JSON.stringify(data)});
    
    
    callApi(config);
  
  }
  return (
      <div className="signup">
        <div className="signup-left"></div>
        <div className="signup-right">
          <Logo/>

          <form onSubmit={e=>registerUser(e)}>
            <h3>Sign Up </h3>
            <h5>Sign Up to Your Account</h5>
            <p className="quotes">We always welcome new user in our website.We are thankfull for you to sign up here</p>
            <input type="text" className="field" value={firstName}  placeholder="First name here" onChange={(e)=>setFirstName(e.target.value)}></input>
            <input type="text" className="field" value={lastName} placeholder="Last name here" onChange={(e)=>setLastName(e.target.value)}></input>
            <input type="email" className="field" value={email} placeholder="Email here" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" className="field" value={password} placeholder="Password here" onChange={(e)=>setPassword(e.target.value)}></input>
            <input type="date" className="field" value={dob} onChange={(e)=>setDob(e.target.value)}></input>
            <input type="number" className="field" value={phoneNum} placeholder="Phone number here" onChange={(e)=>setPhoneNum(e.target.value)}></input>
            
            <p className="dont">Choose your gender</p>
            <div className="radios">
                <span>
                  <input type="radio" checked={gender==="male"?true:false} value="male" onChange={(e)=>setGender(e.target.value)} id="male" name="gender"></input>
                  <label htmlFor="male">Male</label>
                </span>
                <span>
                  <input type="radio"  value="female" onChange={(e)=>setGender(e.target.value)} id="female" name="gender"></input>
                  <label htmlFor="female">Female</label>
                </span>

                <span>
                  <input type="radio"  value="other" onChange={(e)=>setGender(e.target.value)} id="other" name="gender"></input>
                  <label htmlFor="other">Other</label>
                </span>
              </div>


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

              <button type="submit" className="field btn">Sign Up</button>
              <p className="dont">Already have an account?<Link to="/login"> Login </Link></p>
              {
                isLoad?<span className="spanner">Validating. . . &nbsp; <img src={Loading} className="loadSpinner " alt="load"></img></span>:
                <p className="dont red">
                {error?<>Error::{error}</>:<></>}
                </p>
              }
            
          </form>

        </div>
      </div>


  )
}
