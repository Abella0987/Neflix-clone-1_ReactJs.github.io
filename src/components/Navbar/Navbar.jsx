import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix2.jpg'
import { logout } from '../../firebase';

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[]);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" className='logo'/>
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>Children</p>
        <i className="fa-regular fa-bell"></i>
        <div className="navbar_profile">
          <i class="fa-solid fa-user"></i>
          <i className="fa-solid fa-caret-down"></i>
          <div className="dropdown">
            <p onClick={()=>{logout()}} >Sign out of netflix</p>
          </div>
        </div>
     </div>

    </div>
  )
}

export default Navbar
