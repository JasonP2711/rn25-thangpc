import { count } from "console"
import React, {useState,useEffect} from 'react'
import { setConstantValue } from "typescript";


interface Iprops {}

function Index({}: Iprops) {
    const [count, setCount] = useState(-1);

    useEffect(()=>{
        console.log("ComponentDidMount");
        return() =>{
            console.log("ComponentWillUnmount");
        }
    },[])

    useEffect(()=>{
        // console.log("componentDidUpdate");
    })
    useEffect(()=>{
        console.log("ComponentDidUpdate");
    },[count])

    const handleClick = ()=>{
        if(count>=10){
            //ko lam gi
            console.log("ko tang");
            // document.getElementById(ads); js DOM, ko khuyen khich
        }
        else{
        console.log("click");
        setCount(count+1)
        console.log(count)
        }
    }

  return (
    <>
        <button onClick={handleClick} disabled={count>=10?true:false}>click</button>
    </>
  )
}

export default Index