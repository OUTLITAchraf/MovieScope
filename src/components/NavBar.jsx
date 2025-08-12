import React, { useState } from 'react'
import Logo from '../assets/MovieScope-Logo2.png'
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="flex flex-col mx-3 lg:mx-0 lg:flex-row lg:justify-between">
                <div className="flex justify-between items-center">
                    <div className='flex items-center flex-row'>
                        <img src={Logo} alt="LogoSite" className='w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]' />
                        <span className='font-apricots text-4xl lg:text-5xl text-[#0097b2] pb-3 lg:pb-5'>moviescope</span>
                    </div>

                    {/* Toggle button visible on small screens only */}
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {/* Hamburger icon */}
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                // Close icon (X)
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                // Hamburger icon
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div
                    className={`mt-4 space-y-4 lg:flex lg:space-y-0 lg:pb-3 lg:space-x-8 lg:items-center ${isOpen ? "block" : "hidden"
                        } lg:block`}
                >
                    <div className='flex flex-col text-white text-lg font-semibold ml-2 space-y-5 lg:flex-row lg:mx-60 lg:space-y-0 lg:space-x-15'>
                        <a href="" className='hover:text-[#0097b2] border-b-2 pb-1 lg:pb-0 lg:border-b-0'>Home</a>
                        <a href="" className='hover:text-[#0097b2] border-b-2 pb-1 lg:pb-0 lg:border-b-0'>List Movies</a>
                        <a href="" className='hover:text-[#0097b2] border-b-2 pb-1 lg:pb-0 lg:border-b-0'>About</a>
                    </div>

                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mt-4 lg:mt-0">
                        <input
                            type="text"
                            className="lg:w-62 py-2 px-3 border border-white text-white focus:outline-2 focus:outline-[#0097b2] focus:border-[#0097b2] rounded-2xl bg-transparent"
                            placeholder="Searching a movie ..."
                        />
                        <button className="flex flex-row items-center justify-center text-lg text-white gap-2 bg-[#0097b2] py-2 px-3 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-search-icon lucide-search"
                            >
                                <path d="m21 21-4.34-4.34" />
                                <circle cx="11" cy="11" r="8" />
                            </svg>
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
