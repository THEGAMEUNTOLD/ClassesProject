import React from 'react'
import "../Navbar.scss"

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='left'>
                <div className='profile_icon'>
                    <img src="public\profile logo.png" alt="" />
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
            
            </div>

        </div>

    )
}

export default Navbar
