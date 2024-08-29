"use client"
import Link from 'next/link';
import Logo from '../img/logo.png';
import { useState } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiMenu } from 'react-icons/fi';
import "../css/header.css"
export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
         
          {isDropdownOpen && (
            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Link href="/catalog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Tovarlar katalogi
                </Link>
               
              </div>
            </div>

          )}
         <div className='gap'>
            <img className='img' src={Logo.src} alt="logo" />
         </div>
         <div className='menu__btn bg'> <button onClick={toggleDropdown} className="justify-around p-2 flex items-center  rounded-full ">
            <FiMenu className="text-gray-600 lop" /><p className='p'>Tovarlar katalogi</p>
          </button></div>
         
        </div>
        <div className=" items-center space-x-4 f flex justify-around">
          <div className="relative search  ">
            <input
              type="text"
              placeholder="Tovarlarni izlash ..."
              className="pl-10 pr-4 py-2 lut rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FiSearch className="absolute m left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className=" ">
            <FiHeart className="text-gray-600" />
            <span>Saralanganlar</span>
          </button>
          <button className="">
            <FiShoppingCart className="text-gray-600" />
            <span>Savat</span>
          </button>
        </div>
      </div>
    </header>
  );
}
