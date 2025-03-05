import React from 'react'

// destination import
import paris from '../../asset/paris.jpg'
import alaska from '../../asset/alaska.jpg'
import london from '../../asset/london.jpg'
import toronto from '../../asset/toronto.jpg'

// travelers import
import traveler1 from '../../asset/phil_and_claire_dunphy.jpg'
import traveler2 from '../../asset/max.webp'
import traveler3 from '../../asset/jimPam.jpg'
import traveler4 from '../../asset/amy.webp'

// high order array method - map 
const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Phil and Claire',
    socialLink: '@modernfamily'
  },
  {
    id: 2,
    destinationImage: toronto,
    travelerImage: traveler2,
    travelerName: 'Max',
    socialLink: '@2brokegirls'
  },
  {
    id: 3,
    destinationImage: london,
    travelerImage: traveler3,
    travelerName: 'Jim and Pam',
    socialLink: '@theoffice'
  },
  {
    id: 4,
    destinationImage: alaska,
    travelerImage: traveler4,
    travelerName: 'Amy Santiago',
    socialLink: '@brooklyn99'
  }
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
              return (
                // Single passanger 
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className='destinationImage' />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }



        </div>
      </div>

    </div>
  )
}

export default Travelers
