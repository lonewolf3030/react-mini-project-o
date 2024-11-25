import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <img width={200} src = "https://purepng.com/public/uploads/large/amazon-logo-s3f.png" alt ="logo"/>

        <div className='search-bar'>
            <input type = "text" placeholder='search items..'/>
        </div>

        <ul className='menu-items'>
          <li>Home</li> 
          <li>Contact</li> 
          <li>About</li>   
        </ul>
    </div>
  )
}

export default Navbar