import React from 'react'
import logo from "../images/logoimage.png"
import Player from './Player'

function Header() {
  return (
    <div className='header'>      
        <img src={logo}>
        </img>           
        
    </div>
  )
}

export default Header