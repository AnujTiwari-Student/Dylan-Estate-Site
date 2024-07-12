import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';

interface StepTwoFormProps {
  handleOTPSubmit: (e: React.FormEvent) => void;
}

const StepTwoForm: React.FC<StepTwoFormProps> = ({ handleOTPSubmit }) => {
  return (
    <form onSubmit={handleOTPSubmit}>
      <div className='bg-[#fcf8f4] rounded-lg sticky'>
        <h1 className='text-xl text-center py-4 px-16 font-semibold lg:text-start'>LETS GET YOU STARTED!</h1>
      </div>
      <div className='overflow-y-auto h-72'>
        <div className='flex flex-col space-y-4 mx-4 md:mx-8 lg:mx-32 my-10'>
          <div className='flex flex-col lg:flex-row md:items-center space-y-6 space-x-16'>
            <p className='font-semibold text-lg mt-8 mb-2'>Enter the OTP sent on 999-999-999 <span className='text-red-500'>*</span></p>
            <span className='hidden lg:block underline underline-offset-2 text-xs text-black'>Change</span>
          </div>
          <Input type="text" placeholder="Enter OTP" />
          <div className='flex justify-between lg:justify-end'>
            <p className='text-sm flex lg:hidden underline underline-offset-2'>Change</p>
            <p className='text-sm flex'>Resend OTP</p>
          </div>
        </div>
      </div>
      <div className='bg-[#fcf8f4] rounded-lg sticky bottom-0'>
        <div className='mx-12 flex justify-between items-center'>
          <h1 className='text-sm text-center text-gray-400 py-4 lg:text-start'>Need Help? <span className='font-semibold text-black'>Call 9999999999</span></h1>
          <Link href="/Information">
            <Button variant='default'>
              <p className='text-lg font-normal'>NEXT</p>
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default StepTwoForm;
