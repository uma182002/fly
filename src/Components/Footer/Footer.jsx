import React from 'react'

import logo from '../../asset/logo.png'
import { TiSocialFacebook } from 'react-icons/ti'
import {  AiOutlineTwitter , AiFillInstagram} from 'react-icons/ai'
import {  FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='Logo'/>
          </div>
          <div className="socialMediaIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <FaYoutube className='icon'/>
            <AiFillInstagram className='icon' />
          </div>
        </div>

        <div className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li>
            <a href =''>Home</a>
          </li>
          <li>
            <a href =''>Explore</a>
          </li>
          <li>
            <a href =''>Flight Status</a>
          </li>
          <li>
            <a href =''>Travel</a>
          </li>
          <li>
            <a href =''>Check-In</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className='linkTitle'>Quick Guide</span>
          <li>
            <a href =''>FAQ</a>
          </li>
          <li>
            <a href =''>Features</a>
          </li>
          <li>
            <a href =''>Baggage</a>
          </li>
          <li>
            <a href =''>Route Map</a>
          </li>
        </div>

      </div>

      <div className='copyRightDiv flex'>
        <p>@uma182002</p>
      </div>
    </div>
  )
}

export default Footer
