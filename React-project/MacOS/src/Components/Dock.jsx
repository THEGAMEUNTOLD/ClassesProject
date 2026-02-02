import React from "react"
import "../Dock.scss"

const Dock = ({ windowsState, setWindowsState }) => {

  const toggleWindow = (windowName) => {
    setWindowsState(prev => ({
      ...prev,
      [windowName]: !prev[windowName]
    }))
  }

  return (
    <footer className="Dock">

      <div
        className="icon GitHub"
        onClick={() => toggleWindow("github")}
      >
        <img src="/Doc_icon/GitHub_icon.png" alt="GitHub" />
      </div>

      <div
        className="icon Terminal"
        onClick={() => toggleWindow("cli")}
      >
        <img src="/Doc_icon/Terminal_icon.png" alt="Terminal" />
      </div>

      <div
        className="icon Message"
        onClick={() => toggleWindow("resume")}
      >
        <img src="/Doc_icon/Message_icon.png" alt="Resume" />
      </div>

      <div
        className="icon Pdf"
        onClick={() => toggleWindow("notes")}
      >
        <img src="/Doc_icon/Pdf_icon.png" alt="Notes" />
      </div>

      <div
        className="icon Spotify"
        onClick={() => toggleWindow("spotify")}
      >
        <img src="/Doc_icon/Spotify_icon.png" alt="Spotify" />
      </div>

      <div
        className="icon Code"
        onClick={() => toggleWindow("code")}
      >
        <img src="/Doc_icon/code_icon.png" alt="Code" />
      </div>

    </footer>
  )
}

export default Dock
