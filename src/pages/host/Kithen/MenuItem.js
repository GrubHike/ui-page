import React,{useEffect,useRef,useState} from 'react'
import {useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';
import {add_pics_in_menus} from './../../../redux/actions/menuAction'
import {CloudUploadRounded,Image,Delete} from '@material-ui/icons';
import {delete_menu} from './../../../redux/actions/menuAction';
export default function MenuItem({details}) {
  const imgSelector=useRef(null);
  const [allImages,setAllImages]=useState(null);
  const [cookies]=useCookies("userDetails");

  const [cid,setCid]=useState("");
  const [source,setSource]=useState("");
  const dispatch=useDispatch();


  useEffect(()=>{
    setCid(details?._id);
  },[details?._id])

  
  

  const deleteMenu=()=>{
    const config = {
        method: 'delete',
        url: `menueCard/delete/cousine/${cookies?.userDetails?.id }/${cid}`,
        headers: { 
          'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
        },
      };
      dispatch(delete_menu(config))
  }

  const uploadImages=()=>{
    var formData = new FormData();
    if(allImages?.length<=4){

      //Start For
      for(let i=0;i<allImages?.length;i++){
        const file=allImages[i]?allImages[i]:undefined;
        if(file){
          formData.append('cousinePics',file);
        }//End If
      }//End For
      // console.log("Form Data",formData)
      const config = {
        method: 'post',
        url: `menueCard/add/cousinePics/${cookies?.userDetails?.id }/`+cid,
        data : formData,
        headers: { 
          'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
          "Content-Type": "multipart/form-data" 
        },
      };
      dispatch(add_pics_in_menus(config));

    }
  }


  const readImages=(cid,fileKey)=>{
    const config={
        method: 'get',
        headers: { 
          'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
        },
      }
      fetch(`http://${process.env.REACT_APP_IP}:8000/menueCard/pic/${cid}/${fileKey}`,config)
      .then((response)=>response.blob())
      .then((blob)=>{
        const urlCreator = window.URL || window.webkitURL;
        const imgUrl = urlCreator.createObjectURL(blob);
        setSource(imgUrl)
      }).catch((error)=>{
          
          // console.log("Image Getting Error")
      });


  }
  useEffect(()=>{
    if(details?.picsInfo.length>0){
      readImages(details?._id,details?.picsInfo[0]?.fileKey)
    }
  },[details]);


  return (
    <div className="menuItem">
        <div className="imgBox" style={source?{backgroundImage:`url(${source})`}:{}}>
            <button onClick={()=>imgSelector.current.click()} >
                <Image/>
            </button>
            <button onClick={()=>uploadImages()}>
                <CloudUploadRounded/>
            </button>

            <button onClick={()=>deleteMenu()}>
                <Delete/>
            </button>
        </div>
        <input type="file" accept="images/*" ref={imgSelector} hidden onChange={(e)=>setAllImages(e.target.files)}  multiple></input>
        <div className="menuData">
            <small>Cousine name</small>
            <h3 className="np">
                <span className="menuName">{details?.cousineName}</span>
                <span className="price">₹{details?.price}</span>
            </h3>

        </div>

     
    </div>
  )
}
