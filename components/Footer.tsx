import { Button } from '@/components/ui/button';
import React from 'react';

interface PageFooterProps {
  onNextClick: () => void;
  currentStep: number;
}

const PageFooter: React.FC<PageFooterProps> = ({ onNextClick,  currentStep }) => {
  return (
    <div className='px-8 md:px-12 rounded-b-2xl relative bg-[#122b49] flex justify-between items-center bottom-0 h-16'>
      <div className='flex justify-between items-center'>
        <h1 className='text-sm text-center text-white py-4 lg:text-start'>Need Help? <span className='font-semibold text-white'>Call 9999999999</span></h1>
      </div>
      <div>  
        <Button variant='default' onClick={onNextClick} disabled={currentStep === 4}>
          <p className='text-lg font-normal'>NEXT</p>
        </Button>
      </div>
    </div>
  );
};

export default PageFooter;
