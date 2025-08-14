import React from 'react'
import Logo from '../assets/MovieScope-Logo2.png'

function NavBarFooter() {
  return (
    <>
      <div className='flex flex-row items-center'>
        <img src={Logo} alt="LOGO" className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px]' />
        <p className='text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3 font-apricots'>moviescope</p>
      </div>
      <p className='mt-4 sm:mt-6 md:mt-10 text-sm sm:text-base'>&copy; 2025 MovieScope</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
        <p className="text-sm sm:text-base">Privacy Policy</p>
        <p className="text-sm sm:text-base">Terms of us</p>
      </div>
    </>
  )
}

export default NavBarFooter
