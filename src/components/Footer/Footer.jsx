import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <i class="fa-brands fa-youtube icon"></i>
        <i class="fa-brands fa-x-twitter icon"></i>
        <i class="fa-brands fa-facebook icon"></i><i class="fa-brands fa-square-instagram icon"></i>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privancy</li>
        <li>Legal Notices</li>
        <li>Cookie Prferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&#169; 1997-2023 Netflix, Inc</p>
    </div>
  )
}

export default Footer
