import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>Arshad Jewelers XD</h4>
            <ul>
              <li>+9233132132132</li>
              <li>Lahore, Pakistan</li>
            </ul>
          </div>
          <div className='col'>
            <h4>Bobby deol news</h4>
            {/* <ul>
              <li>03244994454</li>
              <li>Lahore, Pakistan</li>
            </ul> */}
          </div>
          {/* <div className='col'>
            <h4>THICC MEMES INC</h4>
            <ul>
              <li>03244994454</li>
              <li>Lahore, Pakistan</li>
              <li>Cantt, Street 4</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer