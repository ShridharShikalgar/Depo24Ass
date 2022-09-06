import React from 'react'
import { backendData } from '../Documents/data'
import ProductTemplate from './ProductTemplate'
const rightContent = () => {
  return (
        <div className='items'>
         {
           backendData.map((Data,index)=>{
            return <ProductTemplate {...Data} key={index}  />
           })
         }
        </div>
  )
}
export default rightContent
