import React, {useState} from 'react'

//imported icons
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

//imported images
import logo from '../../asset/logo.png'

const Navbar = () => {

  // to hide navbar
  // const [active, setActive] = useState('navBarMenu')
  // const showNavBar = () => {
  //   setActive('navBarMenu showNavBar')
  // }
  const [toggle, setToggle] = useState(false);
  

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>
        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate />Support</li>
          <li className='flex'><AiOutlineGlobal />Languages</li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className="navBarTwo flex">
        <div className="logoDiv">
          <img src={logo} className='logo' />
        </div>
          <div className={`navBarMenu ${toggle ? 'showNavBar' : ''}`}>
          <ul className="menu flex">
            <li onClick={() => setToggle(false)} className="listItem">Home</li>
            <li onClick={() => setToggle(false)} className="listItem">About</li>
            <li onClick={() => setToggle(false)} className="listItem">Offers</li>
            <li onClick={() => setToggle(false)} className="listItem">Seats</li>
            <li onClick={() => setToggle(false)} className="listItem">Destinations</li>
          </ul>
          <button onClick={() => setToggle(false)} className='btn flex btnOne'>
            Contact
          </button>
        </div>

          <button className='btn flex btnTwo'>
            Contact
          </button>

          <div className='toggleIcon' onClick={()=> setToggle(!toggle)}>
            <CgMenuGridO className='icon'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
