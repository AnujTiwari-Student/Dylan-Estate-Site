"use client";

import React from 'react'
import LOGO from '../assets/Images/LOGO.png'
import Image from 'next/image'
import Link from 'next/link'
import { Languages, Text, UserRound } from 'lucide-react'

function Header() {
  return (
    // Header Section
    <div className='hidden md:block max-w-screen mx-10'>
        <div className='flex justify-between items-center p-3'>
            <div className='flex items-center'>
                {/* Logo */}
                <Image src={LOGO} alt='Logo'
                    width={95} height={95}
                />
            </div>
            {/* Navbar */}
            <div className='flex items-center md:space-x-5 lg:space-x-10'>
                <Link href='' className='text-sm font-bold'>
                    <p>PROPERTIES</p>
                </Link>
                <Link href='' className='text-sm font-bold'>
                    <p className='hidden lg:flex'>MY DASHBOARD/ACTIVITES</p>
                    <p className='flex lg:hidden'>DASHBOARD</p>
                </Link>
                <Link href='' className='underline underline-offset-2 decoration-2 decoration-gray-500 text-sm font-bold'>
                    <p className='hidden lg:flex'>LIST YOUR PROPERTY</p>
                    <p className='flex lg:hidden'>PROPERTIES</p>
                </Link>
                <Link href='' className='text-sm font-bold'>
                    <p className="hidden lg:flex">CONTACT US</p>
                    <p className="flex lg:hidden">CONTACT</p>
                </Link>
                <Link href='' className='text-sm font-bold'>
                    <p>MORE</p>
                </Link>
                <Link href='' className='text-sm font-bold pointer-events-none'>
                    <p>|</p>
                </Link>
                <Link href='' className='text-sm font-bold'>
                    <Languages size={20}/>
                </Link>
                <Link href='' className='text-sm font-bold'>
                    <UserRound size={20} />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header