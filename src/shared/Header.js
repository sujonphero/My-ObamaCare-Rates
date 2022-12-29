import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/myobamacare.png"
import phone from "../Images/phone.png"

const Header = () => {
  return (
    <div className='md:mx-[120px]'>
        <div className='my-6 flex md:justify-between justify-around '>
            {/* Logo section */}
            <div className=''>
                <Link to="/">
                  <img className='md:h-14 md:w-50 h-10 w-30 cursor-pointer' src={logo} alt="myobamacare.png" />
                </Link>
            </div>

            {/* Caller Section */}
            <div className='space-y-1'>
              <div className='flex justify-around items-center'>
                <div className='h-2 w-2 bg-green-500 rounded-full animate-ping'></div>
                <p className='text-sm font-semibold text-center'>Call before 8:30 PM</p>
              </div>
                <div className='flex justify-between items-center space-x-2 bg-green-500 hover:bg-green-600 duration-200 active:bg-green-700 rounded px-4 py-2 cursor-pointer active:ring-2 ring-green-800'>
                  <img className='h-6' src={phone} alt="phone.png" />
                  <button className='text-white hover:underline text-md font-semibold' type='button'>
                  <a href="tel://1-844-679-0208">YourNumber</a>
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header