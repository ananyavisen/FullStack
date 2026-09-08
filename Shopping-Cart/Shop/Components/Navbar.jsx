import React from 'react'
import './styles.css'
const Navbar = () => {
  return (
   <>
    <div className='navbar'>
        <ul>
            <li><h3><a href=''>Home</a></h3></li>
            <li><h3><a href=''>My Cart</a></h3></li>
            <li><h3><a href=''>My Orders</a></h3></li>
            <li><h3><a href=''>Settings</a></h3></li>
            <li><h3><a href=''>My Profile</a></h3></li>
            <li><h3><a href=''>Logout</a></h3></li>
        </ul>
   
    </div>
   </>
  )
}

export default Navbar