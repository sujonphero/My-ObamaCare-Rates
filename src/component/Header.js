import React from 'react'
import logo from "../Images/myobamacare.png"
import phone from "../Images/digitalPhone.png"

const Header = () => {
  return (
    <div>
        <div className='mx-[120px] my-6 flex justify-between'>
            {/* Logo section */}
            <div>
                <img className='h-14 w-50' src={logo} alt="myobamacare.png" />
            </div>

            {/* Caller Section */}
            <div className='space-y-1'>
                <p className='text-sm font-semibold text-center'>Call before 8:30 PM</p>
                <div className='flex justify-around items-center bg-green-500 active:bg-green-600 rounded px-4 py-2 cursor-pointer'>
                  <img className='h-6 text-blue-600' src={phone} alt="phone.png" />
                  <button className='text-white text-md font-semibold' type='button'>(888) 235-1958</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header