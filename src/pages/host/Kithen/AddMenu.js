import {useState,useEffect} from 'react'
import "./../../../styles/addMenus.scss";
import Modal from './../../Modal';
import CreateMenu from './Menu/CreateMenu';
import MenuItem from './MenuItem';
import {useCookies} from 'react-cookie';
import {useSelector,useDispatch} from 'react-redux';
import {get_menu_card} from './../../../redux/actions/menuAction'
import Loading from './../../../assets/loading.gif';
import 'react-toastify/dist/ReactToastify.css';

import {showErrorToast} from './../../Toast';

export default function AddMenu() {
  const [showModal,setShowModal]=useState(false);
  const {menu}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const [cookies]=useCookies("userDetails");
  const [menus,setMenus]=useState([]);
  const [isLoad,setIsLoad]=useState(true);
  
  useEffect(()=>{
    setIsLoad(false);
    // console.log(menu)
    if(menu?.menu_error){
      showErrorToast(menu?.menu_error);
    }
    else{
      if(menu?.menuData?.data){
      
        // console.log("MAIN MENU Changed",menu?.menuData?.data);
        setMenus(menu?.menuData?.data)
  
      }
    }
   
  },[menu]);


  useEffect(()=>{

    window.addEventListener("click",(e)=>{
        if(e.target.classList.value==="modalContainer"){
           setShowModal(false)
        }     
    });


    const config = {
      method: 'get',
      url: `menueCard/get/${cookies?.userDetails?.id }`,
      headers: { 
        'Authorization': `Bearer ${cookies?.userDetails?.token}`, 
      },
    };
    dispatch(get_menu_card(config))


  },[cookies?.userDetails?.id,cookies?.userDetails?.token,dispatch]);



  return (
    <div className="addMenus">
      
      <p className="highLight">Create, Edit or Add Menu</p>
      <h2>
         Add Menu in Kitchen 
        <button onClick={()=>setShowModal(true)}>+</button>
      </h2>
      {
        showModal?
        <Modal>
          <CreateMenu/>
        </Modal>:
        <></>

      }
      <p className="highLight">Here You can Customize,View your Menus</p>
      <h2 className="dflex">
        <span >Your Menus</span>
        <span className="totalMenus">Total Menus  {menus?.length}</span>
      </h2>
      
      <div className="menus">

      {
        isLoad?
        <div className="imgLoader">
          <img src={Loading} alt="loading"></img>
          &nbsp;
          Checking Server ...
        </div>:
        
          menus?.map((data,index)=>{

            return <MenuItem details={data}  key={index}/>

          })
        
      }
        
      </div>

    </div>
  )
}
