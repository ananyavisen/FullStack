import React from 'react'

const Book = () => {
  return (
   <div className='book'>
    <img src='https://canducci.gallerycdn.vsassets.io/extensions/canducci/create-reactjs-components/1.2.3/1600731009124/Microsoft.VisualStudio.Services.Icons.Default' width={120} height={120} alt='Book Image' />
        <h2>Title: ReactJS</h2><br />
        <h2>Price: ₹567</h2><br />
        <button> Add to Cart</button><br />
   </div>
  )
}

export default Book