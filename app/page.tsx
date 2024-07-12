import Image from 'next/image'
import React from 'react'
import img from '../assets/Images/image 29.png'
import LoginTab from '../components/LoginTab';
import Header from '@/components/Header';
import SmallScreenHeader from '@/components/SmallScreenHeader';
import PageHeader from '@/components/PageHeader';

const steps = [
  { text: "Add your properties Basic details" },
  { text: "Add property Location" },
  { text: "Add property Features and amenities" },
  { text: "Add Price details" },
  { text: "Add your best property Shot" },
];

function page() {
  return (
    <div className='bg-[#122b49] flex-1 h-full md:h-screen'>
      <PageHeader />
      <div className='mt-10 md:my-10'>
        <div className='flex items-center my-10 justify-center mx-5 md:mx-10 lg:mx-32 lg:items-start md:mb-20'>
          <div className='w-full items-start'>
            <h1 className='text-white text-2xl mb-4 text-center md:text-3xl md:text-start md:mx-auto md:font-semibold'>Sell or Rent your Property For Free</h1>
            <p className='text-white text-sm text-center md:text-lg md:text-start md:mx-auto'>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
          </div>
        </div>

        <div className='flex flex-col justify-between mx-5 md:flex md:justify-between md:mx-10 lg:mx-48 md:flex-row'>
          <div className='md:my-12'>
            <h1 className='text-white text-xl mb-2 md:mb-6 md:text-2xl'>Upload your property in 4 simple steps</h1>
            {steps.map((step, index) => (
              <div key={index} className='flex items-center md:mt-2'>
                <Image src={img} alt="Check" />
                <p className='text-white md:text-lg'>
                  {step.text.split(" ").map((word, i) => (
                    word === "details" || word === "Basic" || word === "Location" || word === "Features" || word === "amenities" || word === "Price" || word === "Shot" ? (
                      <span key={i} className="font-bold">{word} </span>
                    ) : (
                      word + " "
                    )
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className='bg-white my-10 h-96 md:my-0 rounded-lg md:w-7/12'>
            <LoginTab />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page