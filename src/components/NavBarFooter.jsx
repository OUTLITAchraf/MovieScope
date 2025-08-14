import React from 'react'
import Logo from '../assets/MovieScope-Logo2.png'

function NavBarFooter() {
  return (
    <>
      <div className='flex flex-row items-center'>
        <img src={Logo} alt="LOGO" className='w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]' />
        <p className='text-4xl text-white mb-3 font-apricots'>moviescope</p>
      </div>
      <p className='mt-10'>&copy; 2025 MovieScope</p>
      <div>
        <p>Privacy Policy</p>
        <p>Terms of us</p>
      </div>
    </>
  )
}

export default NavBarFooter
