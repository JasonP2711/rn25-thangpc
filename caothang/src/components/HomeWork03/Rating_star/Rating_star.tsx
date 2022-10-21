import React from 'react'
import {useState} from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const MAX_STAR = 5;

type Props = {}

function Rating_star() {
  const [star, setStar] = useState(1);
  const array = [1,2,3,4,5];

const inRa = () =>{
  let result = [];
  for(let index = 1; index<=5 ; index++){
    result.push(
      <span key={index} onClick={()=>setStar(index)}><AiFillStar /></span>
    );
  }
  for(let index = star; index<=5 ; index++){
    result.push(
      <span key={index} onClick={()=>setStar(index)}><AiOutlineStar /></span>
    );
  }

}
  
  return (
      <>
        {inRa()}
          {/* {array?.map((index) => {
            return index <= star ? (<AiFillStar key={index} onClick={() => setStar(index)}/>) :(
              <AiOutlineStar key={index} onClick={()=>setStar(index)}/>
            );
          })} */}
      </>
  )
}

export default Rating_star;