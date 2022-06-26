

import React,{useEffect,useState} from 'react'
import "./../../../styles/viewKitchen.scss";
import {useSelector} from 'react-redux';
import {useCookies} from 'react-cookie';
import {Facebook,Instagram,Link,Twitter,Restaurant,MenuBook} from '@material-ui/icons';
import {Link as Anchor} from 'react-router-dom';



export default function ViewKitchen() {
  const [cookies]=useCookies("userDetails");
  const {kitchen}=useSelector((state)=>state);
  const [img1,setImg1]=useState("");
  const [img2,setImg2]=useState("");
  const [img3,setImg3]=useState("");


  const [kitName,setKitName]=useState("");
  const [kitDesc,setKitDesc]=useState("");
  const [lunch,setLunch]=useState("")
  const [dinner,setDinner]=useState("")
  const [facebook,setFacebook]=useState("");
  const [insta,setInsta]=useState("");
  const [twitter,setTwitter]=useState("");
  const [typeFood,setTypeFood]=useState("")


  const fetchAllImages=(fileKey,i)=>{
    const config={
      method: 'get',
      headers: { 
        'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
      },
    }
    fetch(`http://${process.env.REACT_APP_IP}:8000/kitchen/pic/${cookies?.userDetails?.id}/${fileKey}`,config)
    .then((response)=>response.blob())
    .then((blob)=>{
      const urlCreator = window.URL || window.webkitURL;
      const imgUrl = urlCreator.createObjectURL(blob);
      // console.log(imgUrl)
      if(i===0){
        setImg1(imgUrl);
      }
      if(i===1){
        setImg2(imgUrl);
      }
      if(i===2){
        setImg3(imgUrl);
      }
    });


  }
  useEffect(()=>{
    // console.log("VIEW:",kitchen?.kitchenData?.newData?.[0]);
    const detailKitchen=kitchen?.kitchenData?.newData?.[0];
  
    setKitName(detailKitchen?.kitchenName)
    setKitDesc(detailKitchen?.desc);
    setFacebook(detailKitchen?.socialHandles?.facebook);
    setInsta(detailKitchen?.socialHandles?.insta);
    setTwitter(detailKitchen?.socialHandles?.twitter);
    setTypeFood(detailKitchen?.type);
    setLunch(detailKitchen?.mealTime?.lunch);
    setDinner(detailKitchen?.mealTime?.dinner);

    const pics=detailKitchen?.picsInfo;
    for(let i=0;i<pics?.length;i++){
      // console.log(pics?.[i]?.fileKey)
      fetchAllImages(pics?.[i]?.fileKey,i);
    }
   
  },[kitchen]);

  return (
    <div className="viewKitchen">
      <h2>Your Kitchen is <span className="highLight">Successfully</span>,Created</h2>
      <p style={{"fontWeight":"lighter"}}>Your kitchen is successfully created</p>
      
      <div className="imagesCorner" >
        
          <div className="topImg" style={{backgroundImage:`url(${img3?img3:""})`}} >
            <div className="detailskit">
              <h1 className="about"><Restaurant/> About Our Beautiful Kitchen... </h1>
              <p className="aboutDesc">{kitDesc}</p>
              <Anchor to="/addMenus">Create Your Menus <MenuBook/></Anchor>
            </div>
          </div>
        
        <div className="btmImgs">
          <div className="leftImg" style={{backgroundImage:`url(${img1?img1:""})`}}></div>
          <div className="rightImg" style={{backgroundImage:`url(${img2?img2:""})`}}></div>
        </div>

      </div>


      <div className="extraDetails">
        <div className="detailsSocials">
          <h2 className="kit-name">{kitName}</h2>
          <ul>
            <li><a href={facebook}>
              <Facebook/>
            </a></li>
            <li><a href={insta}>
              <Instagram/>
            </a></li>
            <li><a href={twitter}>
              <Twitter/>
            </a></li>
            <li><a href="">
              <Link/>
            </a></li>
          </ul>
        </div>


        <div className="tims">
          <div className="d1">
            <span className="dx"> Available Food Type</span> 
            <p>{typeFood==="Veg"?"Vegetarian":"Non-Vegetarian"}</p>  
          </div>
          <div className="d2">
            <span className="dx">Timming Of Food</span> 
            <p className="dm"><strong className="highlight">Lunch_ -</strong> &nbsp;&nbsp;{lunch}</p>  
            <p className="dm"><strong className="highlight">Dinner -</strong> &nbsp;&nbsp;{dinner}</p>  
        
          </div>
        </div>
        
        {/* <p className="kitDesc">{kitDesc}</p> */}
      </div>



    </div>
  )
}
