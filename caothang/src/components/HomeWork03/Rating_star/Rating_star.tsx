import React, { Component } from 'react'
import * as Icons_button from "react-icons/ai";
type Props = {
    
}

interface IState {
    star1: boolean,
    star2: boolean,
    star3: boolean,
    star4: boolean,
    star5: boolean,
}

class Rating_star extends Component<Props, IState> {
  const star = Array(5).fill(0);

  constructor(props: Props){
    super(props)
    this.state = {star1:false ,star2:false,star3:false,star4:false,star5:false}
  }

  star_choose = () =>{
    let i;
    if(star)
  }

  render() {
    return (
        <>
            <div>{}</div>
            <input type="radio" onClick={this.star_choose}/>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
        </>
    )
  }
}

export default Rating_star
