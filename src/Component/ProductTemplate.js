import React from 'react'

const ProductTemplate = ({title,arr,id,name}) => {
    const items = [...arr]
    // console.log(items)
    const names = [...name]
    console.log(names)
  return (
    <>
      
      <div className='imageDiv'>
        <section  id={id}>   
        <h4>{title}</h4>   
          {
              items.map((p)=>{
                  return <div className='ImageSection'>
                            <img src={p} alt='picture not found'/>  
                        </div>               
              })
          }
        </section>  
      </div>
  </>
  )
}

export default ProductTemplate
