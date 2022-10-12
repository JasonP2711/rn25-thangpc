import React from 'react'

type Props = {}

function Bai_tap1({}: Props) {
  return (
    <>
      <div className="header">The Pulpit Rock</div> 
     <div className="listContent">
      <div className="left">
        <ul>
          <li>The Driver</li>
          <li>The Walk</li>
          <li>The Return</li>
          <li>The End</li>
        </ul>
      </div>
      <div className="content"><h2>The Walk</h2>
      <p>The walk to the Pulpit Rock will tack you approximately two hour, give of take an hour depending on the weather conditions and your physical shape </p>
      <img src="https://img0.oastatic.com/img2/35906371/max/preikestolen-pulpit-rock-.jpg"></img>
      </div>
      <div className="right">
        <ul>
          <li><h2>What</h2>
    <p>Pulpit Rock is a part of a mountain that look like a pulpit</p>
          </li>
          <li><h2>Where</h2>
          <p>Pulpit Rock is a Norway</p>
          </li>
          <li>
            <h2>Price</h2>
          <p>The walk is free</p>
          </li>
          
        </ul>
      </div>
      
     </div>
      <div className="footer"></div> 
      </>
  )
}

export default Bai_tap1