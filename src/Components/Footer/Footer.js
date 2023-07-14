import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <footer className='footer-s'>
        <div className='footer'>
            <li className='img-footer'>
                <img
                src={require("../Assets/icons_assets/footer-logo.png")} alt='little lemon logo'
                ></img>
                </li>
                <li className='contact'>
                    <h1 className='footer-header'>Navigation</h1>
                    <ul className='footer-links'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <a href='/'>Menu</a>
                        <Link to="/reservation">Reservation</Link>
                        <Link to="/OrderOnline">OrderOnline</Link>
                        <Link to="/Login">Login</Link>
                    </ul>
                </li>
                <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=3Li-FfypZYE"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </li>
        </div>
    </footer>
    </>
  )
}

export default Footer