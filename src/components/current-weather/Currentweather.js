import React from 'react';
import './currentweather.css'

function Currentweather() {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>Chicago</p>
          <p className='weather-description'>Cold</p>
        </div>
        <img alt="weather" className='weather-icon' src="icons/01d.png" />
      </div>
    </div>
  )
}

export default Currentweather