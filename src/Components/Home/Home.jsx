import React from 'react'

//imported assets
import video from '../../asset/video.mp4'
import plane from '../../asset/plane.png'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>Create Ever-lasting Memories with us</h1>
      </div>
      <div className='homeImages flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <div className='imgDiv'>
          <img src={plane} className='plane' />
        </div>

      </div>
    </div>
  )
}

export default Home
