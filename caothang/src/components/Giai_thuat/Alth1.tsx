import React from 'react'

type Props = {}

function Alth1() {
    let a =6;
    let check =0;
    for(let i=2;i<a;i++){
        if(a%i===0){
            check =1;
            console.log("isnt prime number");
            break;
        }
    }
    if(check===0){
        console.log("this is prime number");
    }

  return (
    <div>asd</div>
  )
}

export default Alth1