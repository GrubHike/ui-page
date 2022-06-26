import ReactDOM from 'react-dom';
import React from 'react';
import "./../styles/modal.scss";
export default function Modal(props) {
  

  return ReactDOM.createPortal(<>
    <div className="modalContainer">
       {props.children}
    </div>
  </>,document.getElementById("modal"));
  
}