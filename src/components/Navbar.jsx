import React,{useState} from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
    const [logo, setLogo] = useState(false);
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            {/* <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1> */}
            <h1 className='hover:text-indigo-100 cursor default'>BEACHES.</h1>
        </div>
            <ul className='hidden *:cursor-pointer md:flex'>
                <li className='overline hover:overline hover:text-indigo-100'>Home</li>
                <li className='hover:overline hover:text-indigo-100'>Destinations</li>
                <li className='hover:overline hover:text-indigo-100'>Travel</li>
                <li className='hover:overline hover:text-indigo-100'>View</li>
                <li className='hover:overline hover:text-indigo-100'>Book</li>
            </ul>
        <div className='hidden md:flex'>
        <BiSearch className='mr-2 cursor-pointer' size={20} />
        <BsPerson className='cursor-pointer' size={20} />
        </div>

        {/* Hamburger */}

        <div onClick={handleNav} className='z-10 md:hidden'>
            {nav ? <AiOutlineClose size={20} className='text-black'/> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-[22px] flex flex-col' : 'absolute left-[-100%]'}>
        <h1 className='hover:text-[var(--secondary-dark)] cursor-default'>BEACHES.</h1>
            <ul>
                <li className='border-b hover:bg-gray-300' >Home</li>
                <li className='border-b hover:bg-gray-300' >Destinations</li>
                <li className='border-b hover:bg-gray-300' >Travel</li>
                <li className='border-b hover:bg-gray-300' >View</li>
                <li className='border-b hover:bg-gray-300' >Book</li>
                <div className='flex justify-around *:my-6 *:w-5/12'>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6 mx-8'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </ul>
        </div>

    </div>
  )
}

export default Navbar