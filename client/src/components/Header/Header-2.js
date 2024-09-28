import React from 'react'
import "./header-2.css"
import { assets } from "../../assets/assets"

const Header2 = () => {
    return (
        <div className='header2'>
            <div className='image-controller'>
                {window.innerWidth > 900 ?
                    <img src={assets.bg_2} alt="" />
                    :
                    <img src={assets.bg_2_mobile} alt="" />
                }
            </div>
        </div>
    )
}

export default Header2