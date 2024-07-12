'use client';

import React, { useState } from 'react';
import Tabs from './Tabs';
import PageFooter from './Footer';
import PropertyDetails from './PropertyDetails';
import LocationDetails from './LocationDetails';
import PriceDetails from './PriceDetails';
import PropertyImage from './PropertyImage';
import FeaturesPage from './FeaturesPage';

const Container: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleNextClick = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const tabs = [
    { title: 'Property Details', active: currentStep === 0 },
    { title: 'Location Details', active: currentStep === 1 },
    { title: 'Feature and Amenities', active: currentStep === 2 },
    { title: 'Price Details', active: currentStep === 3 },
    { title: 'Property Images', active: currentStep === 4 },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <PropertyDetails
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
          />
        );
      case 1:
        return <LocationDetails />;
      case 2:
        return <FeaturesPage />;
      case 3:
        return <PriceDetails />;
      case 4:
        return <PropertyImage />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto my-16 w-full md:w-max lg:4/6">
      <Tabs tabs={tabs} />
      <div className='hidden md:block'>
        <div className="h-3 bg-gray-400"></div>
      </div>
      {renderStepContent()}
      <PageFooter onNextClick={handleNextClick}  currentStep={currentStep} />
    </div>
  );
};

export default Container;
