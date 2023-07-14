import React, { useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import logo from '../Assets/icons_assets/Logo.svg'
import './Nav.css';
import {HamburgerIcon} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'
const Header = () => {
     const about=useRef("about")
     const orderOnline=useRef("orderOnline")
     const Login=useRef("Login")
     const Handle=(anchor)=>{
          const id=`${anchor}-section`;
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            }
     }
     const[click,setClick]=useState(false);
     const toggle=(click)=>{
          if(click){
              click = false;
          }
          else{
               click = true;
          }
          return click;
     }
  return (
     <div className='navbar'>
         <div className="Logo">
         <img src={logo} alt='logo of the webpage'/>
         </div>
         <div>
        <ul className={click ? 'Navigation' : 'Navigation1 ' }>
        <Link to="Restaurant" className='link'>
             Home
        </Link>
        <Link to="/About" className='link'  onClick={()=>{Handle(about.current)}}>
             About
        </Link>
        <Link to="/Menu" className='link'>
             Menu
        </Link>
        <Link to="/Reservetable" className='link'>
             ReserveTable
        </Link>
        <Link to="/" className='link' onClick={()=>{Handle(orderOnline.current)}}>
             Order Online
        </Link>
        <Link to="/" className='link' onClick={()=>{Handle(Login.current)}}>
             Login
        </Link>
        </ul>
        <div  className='ham'>
        <IconButton
        colorScheme='blue'
        aria-label='HamburgerIcon'
        variant= 'outline'
        icon={<HamburgerIcon  w={12} h={12} color="green" onClick={()=>setClick(toggle)}/>}/>
        </div>
        </div>
    </div>



  )
}

export default Header