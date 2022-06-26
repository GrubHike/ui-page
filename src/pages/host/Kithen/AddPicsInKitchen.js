import {useState,useRef,useEffect} from 'react'
import "./../../../styles/addPicsKitchen.scss";
import {update_kithen_image} from './../../../redux/actions/kitchenAction';
import {useDispatch} from 'react-redux';
import {CloudUpload} from '@material-ui/icons';
import {useCookies} from 'react-cookie';

import 'react-toastify/dist/ReactToastify.css';

import {showErrorToast} from './../../Toast';

export default function AddPicsInKitchen() {

  const [images,setImages]=useState(null);
  const [imagesURLS,setImagesURLS]=useState(null);
  const filesRef=useRef(null);
  const dispatch=useDispatch();
  const [cookies]=useCookies("userDetails");

  const [disabled,setDisabled]=useState(false);

  const uploadAllImages=()=>{
    var formData = new FormData();
    if(images?.length===3){
      for(let i=0;i<images?.length;i++){
        const file=images[i]?images[i]:undefined;
      
        if(file){
          formData.append('kitchenPic',file);
        }//End If
      }//End For
  
      var config = {
        method: 'put',
        url: `kitchen/pic/${cookies?.userDetails?.id }`,
        data : formData,
        headers: { 
          'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
          "Content-Type": "multipart/form-data" 
        },
  
      };
      dispatch(update_kithen_image(config));
      setDisabled(true);
    }
 
    else{
      showErrorToast("Please try to upload  3 images");
    }
 
    
  }

  useEffect(()=>{
    if(images){
      const urls=[];
      if(images?.length===3){
        for(let i=0;i<images?.length;i++){
          const creator=URL.createObjectURL(images[i])
          urls.push(creator)
        }
        setImagesURLS(urls)
      }
      else{
        showErrorToast("Please try to upload 3 images only");
      }

    }
  },[images]);


  return (
    <div className="addPicsInKitchen">
    
      <h2>Add Pics in Kitchen</h2>
      <p style={{"fontWeight":"lighter"}}>Total images {imagesURLS?(imagesURLS?.length):"0"}/3</p>
      <input ref={filesRef}   type="file" accept="images/*" onChange={(e)=>{setImages(e.target.files)}}  multiple hidden></input>

      <div className="imagesArea">
        <button onClick={()=>filesRef.current.click()} className="selectImageBtn" >
          <span>+</span>
          <span>Choose Images</span>
        </button>
        
        {
          imagesURLS&&imagesURLS.map((item,index)=>{
            return <img className="choosenImage" alt={index} async={true} src={item} key={index}></img>
          })
        }
      </div>
      <button onClick={()=>uploadAllImages()} disabled={disabled} style={disabled?{"opacity":0.5}:{"opacity":1}} className="uploadBtn">
        <CloudUpload/>
        Upload All Images
      </button>
     

    </div>
  )
}
