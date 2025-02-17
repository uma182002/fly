import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'

const Search = () => {
  return (
    <div className='search container section'>
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className='singleBtn'>
            <span>Economy Class</span>
          </div>
          <div className='singleBtn'>
            <span>Business Class</span>
          </div>
          <div className='singleBtn'>
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex">

          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>

            <div className='texts'>
              <h4>Location</h4>
              <input type='text' placeholder='Search'/>
            </div>
          </div>

          {/* <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>

            <div className='texts'>
              <h4>Travelers</h4>
              <input type='text' placeholder='Add guests'/>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Search
