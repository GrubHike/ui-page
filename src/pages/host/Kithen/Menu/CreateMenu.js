import {useState} from 'react'
import "./../../../../styles/createMenu.scss";

import {useCookies} from 'react-cookie';
import {useDispatch} from 'react-redux';
import {create_menu} from './../../../../redux/actions/menuAction';


import 'react-toastify/dist/ReactToastify.css';
import {showSuccessToast} from './../../../Toast';

export default function CreateMenu() {

  const [cname,setCname]=useState("");
  const [ing,setIng]=useState("");
  const [fdesc,setFdesc]=useState("");
  const [price,setPrice]=useState("");
  const [pdesc,setPdesc]=useState("");
  const [st,setSt]=useState("");
  const [bto,setBto]=useState("local");
  const [ftype,setFtype]=useState("veg");

  const dispatch=useDispatch();
  const [cookies]=useCookies("userDetails");


  const createMenuCard=(e)=>{
    e.preventDefault();
    const data={
        "cousineName":cname,
        "ingradients":ing.split(","),
        "state":st,
        "desc":fdesc,
        "price":parseInt(price),
        "priceDesc":{"details":pdesc},
        "belongsTo":bto,
        "type":ftype
    }
    const config = {
        method: 'post',
        url: `/menueCard/add/${cookies?.userDetails?.id }`,
        headers: { 
          'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
        },
        data:data
      };

    dispatch(create_menu(config));
    showSuccessToast("Your Menu is Successfully going to create Please Wait...");
  }

  return (
    <div className="createMenu">
        <h4>Create Menu</h4>
        <form onSubmit={(e)=>createMenuCard(e)}>
            <small>Add Details of Menu</small>
            <input type="text" className="field-menu" value={cname} onChange={(e)=>setCname(e.target.value)} placeholder="Add Cousine Name"></input>
            <input type="text" className="field-menu"value={ing} onChange={(e)=>setIng(e.target.value)} placeholder="Add Incredients"></input>
            <textarea  value={fdesc} onChange={(e)=>setFdesc(e.target.value)} className="field-menu desc" placeholder="Description"></textarea>
            <input value={st} onChange={(e)=>setSt(e.target.value)}  type="text" className="field-menu" placeholder="State"></input>
     
            <input value={price} onChange={(e)=>setPrice(e.target.value)}  type="number" className="field-menu " placeholder="Price"></input>
            <textarea value={pdesc} onChange={(e)=>setPdesc(e.target.value)}  className="field-menu desc" placeholder="Price Description"></textarea>
          
            <small>Choose your destination type</small>
            <div className="place">
                <span>
                    <label htmlFor="local">Local</label>
                    <input type="radio" value="local" onChange={(e)=>setBto(e.target.value)} checked={bto==="local"?true:false} name="place" id="local"></input>
                </span>
                <span>
                    <label htmlFor="nonlocal">Non-Local</label>
                    <input type="radio" value="nonlocal" onChange={(e)=>setBto(e.target.value)} checked={bto==="nonlocal"?true:false} name="place" id="nonlocal"></input>
                </span>                   
            </div>

            <small>Choose your Food type</small>
            <div className="types">
                <span>
                    <label htmlFor="veg">Veg</label>
                    <input type="radio" checked={ftype==="veg"?true:false}  name="types" value="veg" onChange={(e)=>setFtype(e.target.value)} id="veg"></input>
                </span>

                <span>
                    <label htmlFor="nonveg">Non-Veg</label>
                    <input type="radio" checked={ftype==="nonveg"?true:false} value="nonveg" onChange={(e)=>setFtype(e.target.value)} name="types" id="nonveg"></input>
                </span>
            </div>
            <button type="submit" className="btnSub">Create Menu Card</button>
            <span className="error"></span>
        </form>


    </div>
  )
}
