import React, { Component } from 'react'
import Style from './ImageView.module.css'
import * as reactStyle from 'react-icons/ai';


type Props = {
  icon_next: JSX.Element,
  icon_privious: JSX.Element,
}

type State = {}

class ImageView extends Component<Props, State> {
  state = {}

  render() {
    return (
        <>
            <body className={Style.body}>
              <button className={Style.next} >{this.props.icon_next}</button>
              <button className={Style.pre} >{this.props.icon_privious}</button>
            </body>
           
        </>
      
    )
  }
}

export default ImageView