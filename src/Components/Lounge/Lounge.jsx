import React from 'react'

// image import
import imagegrid from '../../asset/imagesGrid (3).png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className='sectionContainer grid'>

        <div className="imgDiv">
          <img src={imagegrid} alt='Lounge' />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2> 

          <div className='grids grid'>

            <div className="singleGrid">
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit sequi perspiciatis minima nihil magnam aliquid alias enim minus qui, numquam, vero est veniam eligendi voluptates nam ipsum temporibus porro.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Care on the flight
              </span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae ullam laboriosam, voluptatum est iure a dignissimos quisquam eum sint accusantium consequatur perspiciatis sit alias hic, odit ipsa, laborum tempore?
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Priority Boarding
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis omnis quos! Eligendi, optio veritatis totam minus inventore suscipit, dolore, debitis impedit harum sint sunt. Nam, delectus! Aliquam, perspiciatis amet!
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge
