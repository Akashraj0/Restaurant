import React from 'react'
import {data} from './About';
import profile from '../Assets/icons_assets/restauranfood.jpg';
import './Hero.css'
const Hero = () => {
  const data1=data;
  return (
    <div className='profile-s' id='about-section'>
    <div className='Profile'>
      <div className='data'>
      <h1 className='info'>{data1.title}</h1>
      <h2 className='info'>{data1.sub}</h2>
      <p className='info description'>{data1.description}</p>
      <button className='btn'>{data1.button}</button>
      </div>
      <div className='profile-img'>
        <img src={profile} width="30%" alt='profile-Img'/>
      </div>
    </div>
    </div>
  )
}

export default Hero