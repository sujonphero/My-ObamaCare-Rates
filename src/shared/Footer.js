import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:px-6 px-2'>
        <div className='my-10 border'>
            <hr />
        </div>

        <div>
            <h1 className='text-center font-semibold text-slate-700'>
                Copyright © 2022 MyObamacareRates.com All Rights Reserved
            </h1>
        </div>

        <div className='text-blue-800 sm:text-sm my-8 md:flex text-center md:justify-center md:space-x-2 md:font-semibold'>
            <p className='cursor-pointer'>
                <Link to="/updatePolicy">Updated Privacy Policy</Link> 
             <span className='text-slate-400'>|</span> </p>

            <p className='cursor-pointer'>
            <Link to="/terms">Terms of Use</Link>
            <span className='text-slate-400'>|</span></p>

            <p className='cursor-pointer'>
            <Link to="/privacy">Privacy Center</Link>

                
            </p>
        </div>
    </div>
  )
}

export default Footer