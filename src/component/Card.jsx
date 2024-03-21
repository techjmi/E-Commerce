import React, {} from 'react'


const Card = ({data}) => {
  // const{data}= useContext(DataContext)
  return (
   <div className='cards'>
   <div className="card"> 
<img src={data.images[0]} alt='' height={"170px"} width={"150px"}/>
<h3>{data.title}</h3>
<p>{data.price}</p>
<p>{data.category}</p>
   </div>

   </div>
  )
}

export default Card