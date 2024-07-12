"use client";

import React, { useState } from 'react';
import LOGO from '../assets/Images/LOGO.png';
import Image from 'next/image';
import Link from 'next/link';
import { Languages, UserRound, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-screen mx-10 md:hidden">
      <div className="flex justify-between items-center p-3 border-b-2">
        <div className="flex items-center">
          {/* Logo */}
          <Image src={LOGO} alt="Logo" width={95} height={95} />
        </div>
        {/* Hamburger Menu Icon */}
        <div className='flex space-x-4'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
          <div className="flex items-center">
            <UserRound />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center p-3 space-y-3 mb-2">
          <Link href="" className="text-sm font-bold">
            <p>PROPERTIES</p>
          </Link>
          <Link href="" className="text-sm font-bold">
            <p>MY DASHBOARD/ACTIVITIES</p>
          </Link>
          <Link
            href=""
            className="underline underline-offset-2 decoration-2 decoration-gray-500 text-sm font-bold"
          >
            <p>LIST YOUR PROPERTY</p>
          </Link>
          <Link href="" className="text-sm font-bold">
            <p>CONTACT US</p>
          </Link>
          <Link href="" className="text-sm font-bold">
            <p>MORE</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
