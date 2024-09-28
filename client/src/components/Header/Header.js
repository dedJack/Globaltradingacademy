import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className='image-controller'>
        {window.innerWidth > 900 ?
          <img src={assets.bg_1} alt="" />
          :
          <img src={assets.bg_1_mobile} alt="" />
        }
      </div>
    </div>
  )
}

export default Header