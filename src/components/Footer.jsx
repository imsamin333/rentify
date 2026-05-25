import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-gray-50 border-t border-gray-200 px-6 pt-8 pb-4 mt-auto'>
      
      {/* Top grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-6'>
        
        {/* Brand */}
        <div>
          <div className='text-[17px] font-medium flex items-center gap-1 mb-2'>
            🏠 Rentify
          </div>
          <p className='text-[13px] text-gray-500 leading-relaxed'>
            Find your perfect rental property in Dubai and across the UAE.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className='text-[13px] font-medium mb-2'>Explore</p>
          <div className='flex flex-col gap-1.5'>
            <Link to="/" className='text-[13px] text-gray-500 hover:text-black transition-colors'>Home</Link>
            <Link to="/myListings" className='text-[13px] text-gray-500 hover:text-black transition-colors'>My listings</Link>
            <Link to="/create" className='text-[13px] text-gray-500 hover:text-black transition-colors'>Create listing</Link>
          </div>
        </div>

        {/* Account */}
        <div>
          <p className='text-[13px] font-medium mb-2'>Account</p>
          <div className='flex flex-col gap-1.5'>
            <Link to="/signup" className='text-[13px] text-gray-500 hover:text-black transition-colors'>Sign up</Link>
            <Link to="/login" className='text-[13px] text-gray-500 hover:text-black transition-colors'>Log in</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className='text-[13px] font-medium mb-2'>Contact</p>
          <div className='flex flex-col gap-1.5'>
            <p className='text-[13px] text-gray-500'>support@rentify.ae</p>
            <p className='text-[13px] text-gray-500'>+971 4 000 0000</p>
            <p className='text-[13px] text-gray-500'>Dubai, UAE</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className='border-t border-gray-200 pt-4 flex justify-between items-center flex-wrap gap-2'>
        <p className='text-[12px] text-gray-400'>© 2025 Rentify. All rights reserved.</p>
        <div className='flex gap-3 text-gray-400 text-[18px]'>
          <span className='hover:text-black cursor-pointer transition-colors'>in</span>
          <span className='hover:text-black cursor-pointer transition-colors'>tw</span>
          <span className='hover:text-black cursor-pointer transition-colors'>ig</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer