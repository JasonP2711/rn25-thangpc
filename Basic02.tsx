
import imagebasic2 from "./2.jpg";
import React, { Component } from 'react'
// import "./App.css";
type Props = {}

type State = {}
export default class Basic02 extends Component<Props, State> {
  state = {}
  render() {
    return (
      <>
          <main >
      <div className='basic02'>
      <img src={imagebasic2} alt="" />
      <br />
        <p className="title">YOUNG SHOP</p>
        <p className="content">SamSung  UHD TV 24inch</p>
    <form action="">
    <input className="list"  type="radio" name="star"/><br/>
    <label htmlFor="list"></label>
    </form>
        <p className="price">$599</p>
      </div>
    </main>
        </>
    )
  }
}
