import React, { useState } from 'react'

const Survey = () => {
    const initialState = "hello"
    const otherState = {
        one: "aaaaaa",
        two: "bbbbbb",
        three: "cccccc"
    }
    const [quote, setQuote] = useState (initialState)
    const [message, setMessage] = useState ("")
    const handle = () => {
        setQuote("How are you")
    };

    setTimeout(() => {
        setMessage('Hello, world!');
        setMessage('Hello, !');
        setMessage('Hello, world sssssssss!');
      }, 3000);
  return (
    <div className='mx-[120px] my-10'>
        {/* Question section */}
        <div>
            <p>{message}</p>
            <h1 className='text-center text-xl capitalize font-semibold'>{quote}</h1>
        </div>

        {/* Button Section */}
        <div className='flex justify-evenly my-10'>
            <button onClick={handle} className='rounded-full py-2 text-white w-[400px] bg-green-600 hover:bg-green-700 active:bg-green-800 font-semibold text-lg'>Yes</button>
            <button className='rounded-full py-2 text-white font-semibold w-[400px] bg-red-500 text-lg hover:bg-red-600 active:bg-red-700'>No</button>
        </div>
    </div>
  )
}

export default Survey