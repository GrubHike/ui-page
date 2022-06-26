import "./../../styles/guestProfile.scss";
import {useState,useRef,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {update_profile_image,update_profile} from './../../redux/actions/userAction';
import {useCookies} from 'react-cookie';
import defaultProfile from './../../assets/defaultProfile.jpg';
import {Facebook,Instagram,Link,Twitter} from '@material-ui/icons';
import Loading from './../../assets/loading.gif';

import {showErrorToast} from './../Toast';
import {ToastContainer} from 'react-toastify';

export default function GuestProfile() {
  const [isLoad,setIsLoad]=useState(false);

  const [image,setImage]=useState("");
  const fileUpload=useRef(null);
  const dispatch=useDispatch();
  const selector=useSelector((state)=>state);
  const {user,progress}=selector;
  
  const [source,setSource]=useState("");
  const [cookies]=useCookies("userDetails");




  // Form Data Starts
  const [desc,setDesc]=useState("");
  const [facebook,setFacebook]=useState("");
  const [insta,setInsta]=useState("");
  const [twitter,setTwitter]=useState("");
  const [website,setWebsite]=useState("");


  const [hobbies,setHobbies]=useState("");
  const [address,setAddress]=useState("");
  const [error,setError]=useState("");


  useEffect(()=>{
    console.log(Math.round((progress?.payload?.value)*100/(progress?.payload?.total)))
  },[progress])


  // Form Data Ends

  useEffect(()=>{
    const imgUrl=user?.userData?.imgDataUrl;
    // console.log(user)
    if(imgUrl){
      setSource(imgUrl);
    }
    if(user?.error){
      setError(user?.error);
      showErrorToast(user?.error);
    }
    setIsLoad(false);
  },[user])
  
  const updateProfile=(e)=>{
    setIsLoad(true);
    e.preventDefault();
    const data={
      "desc":desc,
      "address":{"main":address},
      "hobbies":hobbies.split(","),
      "socialHandles":{
        "facebook":facebook,
        "instagram":insta,
        "twitter":twitter,
        "website":website,
      },
    };
    const config = {
      method: 'put',
      url: `guest/update/${cookies?.userDetails?.id }`,
      headers: { 
        'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
      },
      data:data
    };

    dispatch(update_profile(config))
  }
  const updateImage=()=>{
    if(image){
      var formData = new FormData();
      formData.append('profileImage', image);
  
      var config = {
        method: 'put',
        timeout:4000,
        url: `guest/update/pic/${cookies?.userDetails?.id }`,
        data : formData,
  
        headers: { 
          'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
          "Content-Type": "multipart/form-data" 
        },

      };

      dispatch(update_profile_image(config));

    }
  }

  return (
    <div className="guestProfile">


        <div className="guestProfile-left">
          <div className="imageMenu" style={{backgroundImage:`url(${source?source:defaultProfile})`}}>
            <input ref={fileUpload} type="file" accept="images/*" onChange={(e)=>{setImage(e.target.files[0])}} hidden ></input>
            <button className="addPicBtn"  onClick={()=>fileUpload.current.click()}>+</button>            
          </div>
          <button className="updatePicBtn" onClick={()=>updateImage()}>Update Profile Pic</button>

          <h2 className="userName">{user?.userData?.data?.data?.firstName} {user?.userData?.data?.data?.lastName}</h2>
          <small>DESCRIPTION</small>

          <p className="desc">{user?.userData?.data?.data?.desc}</p>

          <small>SOCIAL HANDLES</small>
          <ul className="socialHandles">


            <li><a href={user?.userData?.data?.data?.socialHandles?.facebook}><Facebook/></a></li>
            <li><a href={user?.userData?.data?.data?.socialHandles?.instagram}><Instagram/></a></li>
            <li><a href={user?.userData?.data?.data?.socialHandles?.twitter}><Twitter/></a></li>
            <li><a href={user?.userData?.data?.data?.socialHandles?.website}><Link/></a></li>
          </ul>

          <small>HOBBIES</small>
          <ul className="hobbies">
            {user?.userData?.data?.data?.hobbies?.map((item,index)=>{
              return  <li key={index}>{item}</li>
            })}
          </ul>
        </div>



        <div className="guestProfile-right">
        <form onSubmit={(e)=>updateProfile(e)}>
          <h1 className="editx">My Profile Settings</h1>
          <p className="editx slogan">Please edit your settings below</p>

          <p className="slogan2">Description Here</p>
          <textarea placeholder="Description" className="fieldx descx" onChange={(e)=>setDesc(e.target.value)}  value={desc}></textarea>
          
          <p className="slogan2">Address Here</p>
          <input type="text" className="fieldx" placeholder="Your Address here" onChange={(e)=>setAddress(e.target.value)} value={address}></input>
          
          <p className="slogan2">Social Handles Here</p>
          
          <div className="socialHandlesEdit">
            <input type="text" className="fieldx" placeholder="Facebook Url" onChange={(e)=>setFacebook(e.target.value)} value={facebook}></input>
            <input type="text" className="fieldx" placeholder="Instagram Url" onChange={(e)=>setInsta(e.target.value)} value={insta}></input>
            <input type="text" className="fieldx" placeholder="Twitter Url" onChange={(e)=>setTwitter(e.target.value)} value={twitter}></input>
            <input type="text" className="fieldx" placeholder="Website Url" onChange={(e)=>setWebsite(e.target.value)} value={website}></input>
          
          </div>

          <p className="slogan2">Hobbies Here</p>
          <input type="text" className="fieldx" placeholder="Hobbies eg.Playing,Cooking etc" onChange={(e)=>setHobbies(e.target.value)} value={hobbies}></input>
          <button type="submit" className="fieldx btn">Save Now</button>
          
          <p className="slogan2 red flexRow">
          {
              isLoad?
              <>
                Requesting...
                <img src={Loading} alt="loading" style={{width:"30px",height:"30px"}}></img>

              </>
              :
              <>
                <span style={{color:"red"}}>
                  {error?error:""}
                </span>
              </>
            }
          </p>

         </form> 

        </div>

 
          <ToastContainer/>

    </div>
  )
}
