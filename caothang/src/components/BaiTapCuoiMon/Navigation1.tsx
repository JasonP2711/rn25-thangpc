import React from 'react'
import {Link} from 'react-router-dom'



function Navigation1() {
  return (
    <>
        <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="true" >ComponentList</Link>
      </li>
      <li className="nav-item">
        <Link to="/Form" className="nav-link">Form</Link>
      </li>
      <li className="nav-item">
        <Link to="/DetailUser " className="nav-link"  >Detail</Link>
       
      </li>
      <li className="nav-item">
        <Link to="/updateUser" className="nav-link"  >updateUser</Link>
       
      </li>
    </ul>
  </div>

</div>
    </>
  )
}

export default Navigation1