import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header(props) {
  return (
    <div className="whole-header">
      <img
        className="header-logo"
        src="http://ios.devmountain.com/public/icon.png"
        alt="shelfie"
      />
      <div className="header-title">SHELFIE </div>
      <div className="header-buttons">
        <Link to="/add">
          <div className="header-btn">Add Inventory</div>
        </Link>
        <Link to="/">
          <div className="header-btn">Dashboard</div>
        </Link>
      </div>
    </div>
  )
}
