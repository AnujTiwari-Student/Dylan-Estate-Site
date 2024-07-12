'use client';

import React, { useState } from 'react';
import PropertyDetails from './PropertyDetails';
import PageFooter from './Footer';
import LocationDetails from './LocationDetails';
import FeaturesPage from './FeaturesPage';
import PriceDetails from './PriceDetails';
import PropertyImage from './PropertyImage';
import PropertyDateils from './PropertyDetails';

const PropertyForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState('');

  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PropertyDetails
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    error={error}
                />;
      case 1:
        return <LocationDetails />;
      case 2:
        return <FeaturesPage />;
      case 3:
        return <PriceDetails />;
      case 4:
        return <PropertyImage />;
      default:
        return <PropertyDateils
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    error={error}
                />  
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{renderStepContent()}</div>
      <PageFooter
        onNextClick={handleNextClick}
        currentStep={currentStep}
      />
    </div>
  );
};

export default PropertyForm;
