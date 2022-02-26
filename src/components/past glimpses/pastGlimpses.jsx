import React from 'react'
import Footer from '../footer/Footer'
import './PastGlimpses.css'

const Glimpses = () => {
  return (
    <>
      <div className='pastGlimpses'>
        <div className='pastGlimpses__container'>
          <div className='pastGlimpses__container--title'>
            <h1>Past Glimpses</h1>
          </div>
          <div className='pastGlimpses__container--glimpses'></div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Glimpses
