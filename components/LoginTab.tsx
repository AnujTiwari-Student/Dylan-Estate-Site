'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import UserInformation from './UserInformation';
import OtpScreen from './OtpScreen';

interface FormData {
  name: string;
  country: string;
  phone: string;
  email: string;
}

const LoginTab: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    country: '',
    phone: '',
    email: ''
  });
  const [error, setError] = useState<string>('');
  const [step, setStep] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, country, phone, email } = formData;

    if (!selectedValue) {
      setError('Please select an option.');
    } else if (!name) {
      setError('Please enter your name.');
    } else if (!country) {
      setError('Please enter your country.');
    } else if (!phone && !email) {
      setError('Please provide either a phone number or an email.');
    } else {
      setError('');
      setStep(2);
    }
  };

  const handleOTPSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('OTP Submitted');
  };

  return (
    <div className='h-full'>
      {step === 1 && (
        <UserInformation
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
      )}
      {step === 2 && (
        <OtpScreen handleOTPSubmit={handleOTPSubmit} />
      )}
    </div>
  );
}

export default LoginTab;
