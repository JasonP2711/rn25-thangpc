import React, { Component } from 'react'

type Props = {
  icon_like: JSX.Element,
  icon_dislike: JSX.Element,
}

interface Istate{
  btn_like: boolean,
}

class LikeButton extends Component<Props, Istate> {
  constructor(props : Props){
    super(props);
    this.state = {btn_like : false}
  }

   handleClick = ()=>{
    this.setState((prevState: Istate)=>({
       btn_like: !prevState.btn_like,
    }))
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.state.btn_like===true?this.props.icon_like:this.props.icon_dislike}</button>
        <span>{this.state.btn_like===true?1:0}</span>
      </>
    )
  }
}

export default LikeButton