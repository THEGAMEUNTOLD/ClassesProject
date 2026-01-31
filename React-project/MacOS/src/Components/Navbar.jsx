import React from 'react'
import 'remixicon/fonts/remixicon.css'
import "../Navbar.scss"
import DateTime from './DateTime'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='left'>
                <div className='profile_icon'>
                    <i class="ri-apple-fill"></i>
                </div>
                <div className='Navbar_item'>
                    <p>Bharat Choudhary</p>
                </div>
                <div className='Navbar_item'>
                    <p>File</p>
                </div>
                <div className='Navbar_item'>
                    <p>Window</p>
                </div>
                <div className='Navbar_item'>
                    <p>Help</p>
                </div>
                <div className='Navbar_item'>
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">
                <div className='Wifi_icon'>
                    <i class="ri-wifi-line"></i>
                </div>
                <div className='Navbar_item'>
                    <DateTime />
                </div>
            </div>

        </div>

    )
}

export default Navbar
