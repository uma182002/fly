import React from 'react'

import gridimages from '../../asset/imagesgrid (2).png'

const Support = () => {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>

        <div className='titlesDiv'>
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sint tempore sunt porro beatae ratione. Blanditiis harum, vitae, beatae sed, illo error est enim id eligendi quibusdam perferendis. Blanditiis, cupiditate!</p>
        </div>

        <div className='infoDiv grid'>
          <div className='textDiv grid'>

            <div className='singleInfo'>
              <span className='number'>01</span>
              <h4>Travel requirements for Toronto</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deleniti nesciunt, nemo, molestias dicta incidunt, a alias quibusdam magnam aliquid error iusto. Optio nihil voluptatem saepe dolor illum adipisci earum.</p>
            </div>

            <div className='singleInfo'>
              <span className='number colorOne'>02</span>
              <h4>Travel requirements for Toronto</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deleniti nesciunt, nemo, molestias dicta incidunt, a alias quibusdam magnam aliquid error iusto. Optio nihil voluptatem saepe dolor illum adipisci earum.</p>
            </div>

            <div className='singleInfo'>
              <span className='number colorTwo'>03</span>
              <h4>Travel requirements for Toronto</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deleniti nesciunt, nemo, molestias dicta incidunt, a alias quibusdam magnam aliquid error iusto. Optio nihil voluptatem saepe dolor illum adipisci earum.</p>
            </div>

          </div>

          <div>
            <div className='imgDiv'>
              <img src={gridimages} alt=''/>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support
