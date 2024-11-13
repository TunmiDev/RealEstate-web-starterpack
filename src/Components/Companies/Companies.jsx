import React from 'react'
import './Companies.css'
import image1 from '../../../public/prologis.png'
import image2 from '../../../public/tower.png'
import image3 from '../../../public/equinix.png'
import image4 from '../../../public/realty.png'

const Companies = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerwidth flexCenter c-container">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
    </section>
  )
}

export default Companies
