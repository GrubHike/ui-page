import "./../../../styles/createKitchen.scss";
import Loading from './../../../assets/loading.gif';
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {edit_kitchen} from './../../../redux/actions/kitchenAction';
import {useCookies} from 'react-cookie';

export default function CreateKitchen() {
  const [cookies]=useCookies("userDetails");

  const [kitName,setKitName]=useState("");
  const [kitDesc,setKitDesc]=useState("");

  const [lunchSt,setLunchSt]=useState("");
  const [lunchEn,setLunchEn]=useState("");

  const [dinnerSt,setDinnerSt]=useState("");
  const [dinnerEn,setDinnerEn]=useState("");

  const [error,setError]=useState("");
  const [isLoad,setIsLoad]=useState(false);


  const [fb,setFb]=useState("");
  const [tw,setTw]=useState("");
  const [insta,setInsta]=useState("");
  const [web,setWeb]=useState("");

  const [kitType,setKitType]=useState("Veg");



  const dispatch=useDispatch();
  const {kitchen}=useSelector((state)=>state);
  useEffect(()=>{
    // console.log("Called********")
    if(kitchen?.kitchen_error){
        setError(kitchen?.kitchen_error)
    }
    else{
        if(kitchen?.kitchenData){
            const dataKitchen=kitchen?.kitchenData?.newData?.[0];
            // console.log("Data",dataKitchen);
            setKitName(dataKitchen?.kitchenName)

            // Meal Time
            let lunch=dataKitchen?.mealTime?.lunch;
            let dinner=dataKitchen?.mealTime?.dinner;
            setLunchSt(lunch?.split("to")[0]?.split("pm")[0].trim())
            setLunchEn(lunch?.split("to")[1]?.split("pm")[0].trim())
            setDinnerSt(dinner?.split("to")[0]?.split("pm")[0].trim())
            setDinnerEn(dinner?.split("to")[1]?.split("pm")[0].trim())

            let social=dataKitchen?.socialHandles;
            setFb(social?.facebook);
            setInsta(social?.insta);
            setTw(social?.twitter);
            setWeb(dataKitchen?.webSite);
            setKitDesc(dataKitchen?.desc);

        }
    }
    setIsLoad(false);
  },[kitchen])
  const createKitchen=(e)=>{
    setIsLoad(true);
    e.preventDefault();
    const data={
        "kitchenName" : kitName,
        "website" : web,
        "socialHandles" : {
            "facebook" : fb,
            "insta" : insta,
            "twitter":tw
        },
        "mealTime" : {
            "lunch" : `${lunchSt}pm to ${lunchEn}pm`,
            "dinner" : `${dinnerSt}pm to ${dinnerEn}pm`
        },
        "picsInfo":[],
        "desc" : kitDesc,
        "kitchenType" : kitType
   }
   const config={
       method:"PUT",
       url:"kitchen/edit/"+cookies?.userDetails?.id,
       headers:{
           'Authorization':"Bearer "+cookies?.userDetails?.token,
           'Content-Type': 'application/json'
       },
       data:JSON.stringify(data)
   }
   dispatch(edit_kitchen(config))
  }
  return (
    <div className="createKitchen">
        <h2>Create Kitchen</h2>
        <p>Fill the form ,add details to make kitchen</p>
        <form onSubmit={(e)=>createKitchen(e)}>
            <p className="help">Kitchen name</p>
            <input type="text" placeholder="Kitchen name here" className="fieldc" value={kitName} onChange={(e)=>setKitName(e.target.value)}></input>
           
            <p className="help">Social handles here</p>
            <div className="kitchenSocialHandles">
                <input type="text" className="fieldc" placeholder="Facebook url" value={fb} onChange={(e)=>setFb(e.target.value)}></input>
                <input type="text" className="fieldc" placeholder="Instagram url" value={insta} onChange={(e)=>setInsta(e.target.value)}></input>
                <input type="text" className="fieldc" placeholder="Twitter url" value={tw} onChange={(e)=>setTw(e.target.value)}></input>
                <input type="text" className="fieldc" placeholder="Website url" value={web} onChange={(e)=>setWeb(e.target.value)}></input>
            </div>
            <div className="mealTime">
                <span>
                    <p className="help">Lunch Time Start/End</p>
                    <input type="time" className="fieldc" placeholder="Lunch time" value={lunchSt} onChange={(e)=>setLunchSt(e.target.value)}></input>
                    <input type="time" placeholder="Lunch time" className="fieldc" value={lunchEn} onChange={(e)=>setLunchEn(e.target.value)}></input>
                </span>
                <span>
                    <p className="help">Dinner Time Start/End</p>
                    <input type="time" className="fieldc" placeholder="Lunch time" value={dinnerSt} onChange={(e)=>setDinnerSt(e.target.value)}></input>
                    <input type="time" className="fieldc" placeholder="Dinner time" value={dinnerEn} onChange={(e)=>setDinnerEn(e.target.value)}></input>
                </span>
            </div>

            <p className="help">What do you like Veg/Non-Veg?</p>

            <div className="foodType">
                <span>
                    <label htmlFor="veg">Veg</label>
                    <input type="radio" checked={kitType==="Veg"?true:false} id="veg" value="Veg" onChange={(e)=>setKitType(e.target.value)} name="foodType" ></input>
                </span>
                <span>
                    <label htmlFor="nonveg">Non-Veg</label>
                    <input type="radio" checked={kitType==="Non-Veg"?true:false} id="nonveg" name="foodType" value="Non-Veg" onChange={(e)=>setKitType(e.target.value)}  ></input>
                </span>
            </div>

            <p className="help">Description about kitchen</p>

            <textarea placeholder="Write about your Kitchen" className="fieldc"  value={kitDesc} onChange={(e)=>setKitDesc(e.target.value)} ></textarea>
            <button type="submit" className="fieldc">Create Kitchen</button>
        </form>

        <p className="highLight red flexRow" >
            {
              isLoad?
              <>
                <span className="highLight">Requesting..</span>
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
    </div>
  )
}
