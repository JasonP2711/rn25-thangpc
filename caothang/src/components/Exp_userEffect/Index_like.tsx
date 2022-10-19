import React, {useState,useEffect} from 'react'


type Props = {}

function Index_like({}: Props) {
const [button_like, setButton] = useState(false);  

    useEffect(() =>{
        console.log("ComponentDidMount");
        return()=>{
            console.log("ComponentWillUnmount");
        }
    },[])

    useEffect(()=>{
        console.log("componentDidUpdate");
    })

    useEffect(()=>{
        console.log("ComponentDidUpdate");
    },[button_like])

    const handleOnclick =()=>{
        console.log("click");
        setButton(!button_like);
    }
  return (
    <>
    <button onClick={handleOnclick}>Like</button>
    <span>0</span>
    </>
  )
}

export default Index_like



//button rating
//1 state
//in ra 5 sao
//1 state index
//click 1 ngoi sao->setStar = Index(ngoi sao)
//condition rendering: render ngoi sao vang: index ngoi sao < star -> in ra ngoi sao vang
//de don gian thi ta thay the ngoi sao thanh so 0 va sa0 vang la 1

//for(let i=1;i<star,i++){
// <span onClick={()=>setState(i)}>1</span>   
//}