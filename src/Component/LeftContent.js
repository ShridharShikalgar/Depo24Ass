import React, { useEffect, useState } from 'react'
import {backendData} from '../Documents/data'
const colors = [
  {
    lables:"orange"
  }
]
const LeftContent = () => {
  const [click,setClick] = useState(true);
  const [click1,setClick1] = useState(true);
  
  const handleClick=()=>{
    setClick(!click);
  }
  const handleClick1=()=>{
    setClick1(!click1)
  }
  return (
    <div className="left-container">
      <div onClick={handleClick} className='leftContainer-header OrangeClass'>
        <label className='Lable'>Furniture Fittings</label><br/>
        <i className={click ? 'fas fa-angle-down':'fas fa-angle-up'}/>
      </div>
        {
          click ?
          <div className='a-links'>
            {
              backendData.map((head,index)=>{
                return <a href={`#${head.id}`} key={index}>{head.title}</a>
              })
            }
          </div> : ""
        }
      <div onClick={handleClick1} className='leftContainer-header OrangeClass'>
        <label className='Lable'>Home Decor</label><br/>
      <i className={click1 ? 'fas fa-angle-down':'fas fa-angle-up'}/>
      </div>
        {
          click1 ? " ":""
        }
    </div>
  )
}

export default LeftContent
