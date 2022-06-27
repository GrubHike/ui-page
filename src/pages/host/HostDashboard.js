import React, { useEffect, useState } from 'react'
import "./../../styles/hostDashboard.scss";
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { useSelector,useDispatch } from 'react-redux';
import {get_kitchen} from './../../redux/actions/kitchenAction'
import Loading from './../../assets/loading.gif';
import {useCookies} from 'react-cookie';

const CreateKitchen = React.lazy(() => import("./Kithen/CreateKitchen"));
const AddPicsInKitchen = React.lazy(() => import("./Kithen/AddPicsInKitchen"));
const ViewKitchen = React.lazy(() => import("./Kithen/ViewKitchen"));


export default function HostDashboard() {
  const [steps, setSteps] = useState(null);
  const [isLoad,setIsLoad]=useState(true);
  const [disabled,setDisabled]=useState(false);
  const [cookies]=useCookies("userDetails");
  
  const [fetched,setFetched]=useState(false);
  const dispatch=useDispatch();
  const elms = [
    <CreateKitchen />
    ,
    <AddPicsInKitchen />
    ,
    <ViewKitchen />
  ];


  const { kitchen } = useSelector((state) => state);
  const backPressed = () => {
    if (steps <= 0 || steps===null) {
      setSteps(0)
    }
    else {
      setSteps(steps - 1)
    }
  }
  useEffect(() => {
    setIsLoad(true);
    // console.log("INSIDE KITCHEN",kitchen,fetched)

    if(fetched){
      // console.log("Inside Changes",kitchen)
      

      

      if (kitchen?.kitchenData) {
        setSteps(1);
        setIsLoad(false)

        // console.log("Kitchen Data")
        
            if (kitchen?.kitchenData?.newData?.[0]?.picsInfo.length > 0) {
              // console.log("Kitchen Images Present ")
              setSteps(2);
              setDisabled(false)
              setIsLoad(false)

            }
            else{
              // console.log("No Kitchen Images Present ")
              setSteps(1);
              setDisabled(true)
              setIsLoad(false)
      
            }
      }
      else{
        // console.log("No Kitchen Data")
        // console.log("IN STEP 0:",kitchen)
        if(kitchen?.kitchen_error)
        {
          if((kitchen?.kitchen_error)!=="Not Able to Find the Menue !"){
            setSteps(0);
            setDisabled(true)
            setIsLoad(false)
          }
 
        }
    
      }



    }
  }, [fetched,kitchen])

  useEffect(()=>{
    // console.log("STEPS:",steps)
  },[steps])


  const frontPressed = () => {
    if (steps >= elms.length - 1) {
      setSteps(elms.length - 1)
    }
    else {
      setSteps(steps + 1)
    }
  }
  

  useEffect(()=>{
    setIsLoad(true);
    const config={
      method: 'get',
      url:`kitchen/${cookies?.userDetails?.id}`,
      headers: { 
        'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
      },
    }
    dispatch(get_kitchen(config))
  
    setFetched(true);
    // console.log("FETCHED",true)

  },[])


  return (
    <div className="hostDashboard">
      <div className="hostDashboard-top">
        <div className="lefti">
          <h1><span>Welcome,</span>Host to our Kitchen</h1>
          <p>Here You can create your food with our tools and serve to guest with love and affection....</p>
          <ul className="steps">
            <li>Create Your Kitchen</li>
            <li>Add Menus in Kitchen</li>
            <li>View Your Kitchen</li>
          </ul>
        </div>
      </div>
      <div className="steps">
        <h4>Step {steps + 1} of Step {elms.length}</h4>
        <div className="btns">
          <button onClick={() => backPressed()}><ArrowLeft /></button>
          <button onClick={() => frontPressed()} disabled={disabled} style={disabled?{"opacity":"0.5"}:{"opacity":"1"}}><ArrowRight /></button>
        </div>
      </div>
      {
        isLoad?<div className="imgLoader">
          <img src={Loading} alt="loading"></img>
          &nbsp;
          Checking Server ...
        </div>
        :
        steps!==null?elms[steps]:
        <div className="imgLoader">
          <img src={Loading} alt="loading"></img>
          &nbsp;
          Checking Server ...
        </div>
      }
    </div>
  )
}
