import React from 'react'

const Book = ({props}) => {
    
  return (
   <div className='book'>
    <img src={props.image} width={120} height={120} alt='Book Image' />
        <h2>Title: {props.title}</h2><br />
        <h2>Price: ₹{props.price}</h2><br />
        <button> Add to Cart</button><br />
   </div>
  )
}

export default Book