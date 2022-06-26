import React from 'react'
import {Link} from 'react-router-dom';
import "./../styles/error.scss";
export default function Error404() {
  return (
    <div className="error">
      <h1>Page Not Found</h1>
      <Link to="/">Go Back To Home</Link>
    </div>
  )
}
