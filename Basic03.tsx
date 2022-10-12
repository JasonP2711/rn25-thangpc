import React from 'react'
import imagebasic3 from "./3.jpg"
type Props = {}

const Basic03 = (props: Props) => {
  return (
    <>
        <main className='basic3'>
            <img width={300}  className={'m-2'} src={imagebasic3} alt="" />
            <span>Technology</span>
             <p className='basic3_content'> <b>Harman Kadon Onyx Studio Mini, Review and Experience</b> </p>
             <p className='basic3_day' > <p>Ferb 21,2021 </p>  by drfurion</p>
        </main>
    </>
  )
}

export default Basic03