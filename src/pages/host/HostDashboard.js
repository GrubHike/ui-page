import React, { useEffect, useState } from 'react'
import "./../../styles/hostDashboard.scss";
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Loading from './../../assets/loading.gif';
const CreateKitchen = React.lazy(() => import("./Kithen/CreateKitchen"));
const AddPicsInKitchen = React.lazy(() => import("./Kithen/AddPicsInKitchen"));
const ViewKitchen = React.lazy(() => import("./Kithen/ViewKitchen"));

export default function HostDashboard() {
  const [steps, setSteps] = useState(0);
  const [isLoad,setIsLoad]=useState(true);
  const [disabled,setDisabled]=useState(false);
  const elms = [
    <CreateKitchen />
    ,
    <AddPicsInKitchen />
    ,
    <ViewKitchen />
  ];


  const { kitchen } = useSelector((state) => state);
  const backPressed = () => {
    if (steps <= 0) {
      setSteps(0)
    }
    else {
      setSteps(steps - 1)
    }
  }
  useEffect(() => {
   
    // console.log("Inside Changes", kitchen)
    setIsLoad(true);
    if (kitchen?.kitchenData) {
      setSteps(1);
      // console.log("Kitchen Data")
      
      if (kitchen?.kitchenData?.newData?.[0]?.picsInfo.length > 0) {
        // console.log("Kitchen Images Present ")
        setSteps(2);
        setDisabled(false)

      }
      else{
        // console.log("No Kitchen Images Present ")
        setSteps(1);
        setDisabled(true)

      }
      setIsLoad(false);
      
    }
    else{
      // console.log("No Kitchen Data")
      setTimeout(() => {
        setIsLoad(false);
      }, 3000);
      setSteps(0);
      setDisabled(true)
    }

   
  }, [kitchen])



  const frontPressed = () => {
    if (steps >= elms.length - 1) {
      setSteps(elms.length - 1)
    }
    else {
      setSteps(steps + 1)
    }
  }



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
        :elms[steps]
      }
    </div>
  )
}
