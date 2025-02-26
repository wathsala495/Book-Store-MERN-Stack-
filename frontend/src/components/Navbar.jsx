import React, { useState } from 'react'
import { Link, useHref } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatarImg from './../assets/avatar.png'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const currentUser=true
    const [isDropdownOpen,setisDropdownOpen]=useState(false)
    console.log(isDropdownOpen)

    const navigation=[
        {name:"Dashboard" ,href:"/dashboard"},
        {name:"Orders",href:"/orders"},
        {name:'Cart Page',href:'/cart'},
        {name:'Check Out',href:"/checkout"}
    ]
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
    <nav className='flex justify-between items-center'>
        {/* left side */}
        <div className='flex  md:gap-16 gap-4 items-center'>
            <Link to='/'>
            <HiMiniBars3CenterLeft  className='size-6'/>
            </Link>
            {/* search input */}
           <div className='relative sm:w-72 w-40 space-x-2 '>
           <FaSearch className='absolute inline-block left-3 inset-y-2'/>
           <input type="text"  placeholder='search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'/>
           </div>
        </div>
        {/* right side */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>
            {currentUser?<><button onClick={()=>setisDropdownOpen(!isDropdownOpen)}><img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser?'ring-2 ring-blue-500':''}`}/></button>
        {/* show dropdown */}
        {
         isDropdownOpen && (
           <div className='absolute right-0 top-8 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
            <ul className='py-2'>
                {
                    navigation.map((item)=>{
                        return(
                            <li key={item.name} onClick={()=>setisDropdownOpen(false)}><Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>{item.name}</Link></li>
                        )
                    })
                }
            </ul>
           </div>
         )   
            
        }
        </>
            
            :<Link to="/login"><FaRegUser className='size-6' /></Link>}
        
      <button className='hidden sm:block'>
      <FaRegHeart className='size-6 '/>
      </button>
      <Link to='/cart' className='bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm'>
      <MdOutlineShoppingCart  className=''/>
      <span className='text-sm font-semibold sm:ml-1'>{cartItems.length>0?cartItems.length:0}</span>
      </Link>
        </div>
    </nav>
    </header>
  )
}

export default Navbar
