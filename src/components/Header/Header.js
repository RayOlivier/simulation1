import React from "react"
import "./Header.css"

export default function Header(props) {
  return (
    <div className="whole-header">
      <img
        className="header-logo"
        src="http://ios.devmountain.com/public/icon.png"
        alt="shelfie"
      />
      <div className="header-title">SHELFIE </div>
    </div>
  )
}
