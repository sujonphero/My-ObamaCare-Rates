import React from 'react'
import president from "../Images/biden.png"

const Hero = () => {
  return (
    <div>
        <div className='bg-blue-500 rounded md:w-[800px] sm:w-[500px] mx-auto'>
            <h1 className='text-xl font-semibold text-white p-4'>
            Americans may now qualify for $0/month health insurance plans. Call or fill out the form below to check eligibility in 60 seconds.
            </h1>
            <img className='md:w-[440px] w-[350px] rounded mx-auto pb-14 pt-4' src={president} alt="biden.png" />
        </div>
    </div>
  )
}

export default Hero