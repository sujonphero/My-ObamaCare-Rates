import React from 'react'

const About = () => {
  return (
    <div className='md:flex justify-center md:my-20 my-6 md:mx-[120px]'>
        {/* Disclaimer Section */}
        <div className='px-6 mb-10'>
            <h1 className='font-bold hover:underline cursor-pointer'>
            MyObamacareRates.com
            </h1>

            <p className='text-gray-800'>
            Speak to a Health Care Agent,
            </p>

            <p className='text-gray-800'>
            (888) 684-4942
            </p>

            <p className='text-gray-800'>
            Mon-Fri: 8:30am-6pm EST
            </p>

            <p className='text-gray-800'>
            Sat: 9am-7pm EST
            </p>

            <p className='text-gray-800'>
            Sun: 11am-7pm EST
            </p>

            <p className='font-semibold'>
            MyObamacareRates.com
            </p>

            <p className='font-bold hover:underline cursor-pointer'>
              <a href="mailto:someone@yoursite.com">Email Us</a>
            </p>
        </div>

        {/* Address Section */}
        <div className='md:ml-60 px-6'>
            <p className='text-xs font-semibold'>Disclaimer</p><br />

            <p className='text-xs'>
            By entering a phone number and submitting this form, you represent that you are at least 18 years old and agree to our Privacy Policy and Terms of Use
            </p><br />

            <p className='text-xs'>
            You also authorize Leads Team, LLC to contact you for marketing/telemarketing purposes at the number, email address and address provided above, including your wireless number if provided, using live operators, automated telephone dialing systems, pre-recorded messages, artificial voice, and/or text messages, even if the number you provide is on a state or Federal Do Not Call registry. You are not required to consent as a condition of purchasing goods or services. Message and Data rates may apply. You may revoke consent at anytime.
            </p><br />

            <p className='text-xs'>
            MyobamacareRates.com is owned and operated by Leads Team LLC. All media is paid for by Leads Team LLC
            </p>
        </div>
    </div>
  )
}

export default About