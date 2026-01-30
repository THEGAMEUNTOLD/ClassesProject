import React from 'react'
import "../Dock.scss"

const Dock = () => {
    return (
        <footer className='Dock'>
            <div className='icon GitHub'><img src="public/Doc_icon/GitHub_icon.png" alt="" /></div>
            <div className='icon Calender'><img src="public/Doc_icon/Calender_icon.png" alt="" /></div>
            <div className='icon Link'><img src="public/Doc_icon/Link_icon.png" alt="" /></div>
            <div className='icon Message'><img src="public/Doc_icon/Message_icon.png" alt="" /></div>
            <div className='icon Notes'><img src="public/Doc_icon/Notes_icon.png" alt="" /></div>
            <div className='icon Pdf'><img src="public/Doc_icon/Pdf_icon.png" alt="" /></div>
            <div className='icon Clip'><img src="public/Doc_icon/Clip_icon.png" alt="" /></div>
            <div className='icon Spotify'><img src="public/Doc_icon/Spotify_icon.png" alt="" /></div>
            <div className='icon Code'><img src="public/Doc_icon/code_icon.png" alt="" /></div>

        </footer>
    )
}

export default Dock
