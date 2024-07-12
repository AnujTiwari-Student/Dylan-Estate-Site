'use client';

import React, { useState } from 'react';
import CustomRadioGroup from './RadioGroup';
import CustomButton from './OptionButtons';
import InputField from './InputField';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from './ui/textarea';


interface PropertyDateilsProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  formData: { name: string; country: string; phone: string; email: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  error: string;
};

const PropertyDateils: React.FC<PropertyDateilsProps> = ({ selectedValue, setSelectedValue, formData, handleChange, handleSubmit, error }) => {

  const [propertyType, setPropertyType] = useState<string>('');

  const propertyForOptions = [
    { value: 'option-one', label: 'Rent' },
    { value: 'option-two', label: 'Sale' },
  ];

  const propertyTypeOptions = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'option-five', label: 'Land / Plot' },
  ];

  const residentialOptions = [
    { value: 'flat', label: 'Flat / Apartment' },
    { value: 'house', label: 'House / Villa' },
  ];

  const commercialOptions = [
    { value: 'office', label: 'Office Space' },
    { value: 'working', label: 'Co working' },
    { value: 'restaurant', label: 'Restaurant / Cafe' },
    { value: 'shop', label: 'Shop / Showroom' },
    { value: 'industry', label: 'Industrial Bldg' },
    { value: 'industryShed', label: 'Industrial Shed' },
    { value: 'warehouse', label: 'Warehouse / Godown' },
  ];

  const inputFields = [
    { label: 'Build up Area', placeholder: 'Sq. Ft.', type: 'text', name: 'area' },
    { label: 'Carpet Area', placeholder: 'Sq. Ft.', type: 'text', name: 'carpet' },
  ];

  const floor = [
    { label: 'Property on Floor', placeholder: 'Floor', type: 'number', name: 'floor' },
    { label: 'Total Floors Count', placeholder: 'Floors', type: 'number', name: 'floors' },
  ]

  const propertyAge = [
    {label: 'Less than 1 Year', name: 'age'},
    {label: '1-3 Year', name: 'age'},
    {label: '3-5 Year', name: 'age'},
    {label: '5-10 Year', name: 'age'},
    {label: 'More than 10 year', name: 'age'},
  ]

  const bhkType = [
    {label: '1 RK', name: '1'},
    {label: '1 BHK', name: '2'},
    {label: '2 BHK', name: '3'},
    {label: '3 BHK', name: '4'},
    {label: '4 BHK', name: '5'},
    {label: '5+ BHK', name: '6'},
  ]

  const bathroom = [
    {label: '1', name: '2'},
    {label: '2', name: '3'},
    {label: '3', name: '4'},
    {label: '4', name: '5'},
    {label: '5', name: '1'},
    {label: '6+', name: '6'},
  ]

  const balcony= [
    {label: '1', name: '2'},
    {label: '2', name: '3'},
    {label: '3', name: '4'},
    {label: '4+', name: '5'},
  ]

  const tenetPreference = [
    { value: 'any', label: 'Any' },
    { value: 'family', label: 'Family' },
    { value: 'male', label: 'Bachelor (Man)' },
    { value: 'female', label: 'Bachelor (Woman)' },
  ];


  const availability = [
    { value: 'immediate', label: 'Immediate' },
    { value: 'ver-short-term', label: 'Within 15 Days' },
    { value: 'short-term', label: 'Within 1 Month' },
    { value: 'long-term', label: 'Within 2 Month' },
  ];


  return (
    <>
      <div className='overflow-y-auto border h-80 md:h-96 lg:h-80 md:max-w-[720px] lg:max-w-[960px] overflow-x-hidden'>
        {/* Content goes here */}

        <div className='flex flex-col space-y-4 mx-10 my-10'>
          <p className='text-xl font-semibold'>
            <span className='text-red-500'>*</span> Property For:
          </p>
          <div className='flex flex-row'>
            <CustomRadioGroup selectedValue={selectedValue} onValueChange={setSelectedValue} options={propertyForOptions} />
          </div>
        </div>

        <div className='flex flex-col space-y-4 mx-10 my-10 md:mx-10'>
          <p className='text-xl font-semibold'>
            <span className='text-red-500'>*</span> Property Type:
          </p>
          <div className='flex flex-col md:flex-row'>
            <CustomRadioGroup selectedValue={propertyType} onValueChange={setPropertyType} options={propertyTypeOptions} />
          </div>
        </div>

        {propertyType === 'residential' && (
          <div className='mx-10 my-6 rounded-xl space-y-2 md:space-y-0 md:gap-3 flex flex-col md:flex-row md:w-7/12 flex-wrap'>
            {residentialOptions.map((option) => (
              <CustomButton key={option.value} onClick={() => console.log(option.label)}>
                {option.label}
              </CustomButton>
            ))}
          </div>
        )}

        {propertyType === 'commercial' && (
          <div className='mx-10 my-6 rounded-xl space-y-2 md:space-y-0 md:gap-3 flex flex-col md:flex-row md:w-5/12 lg:w-7/12 flex-wrap'>
            {commercialOptions.map((option) => (
              <CustomButton key={option.value} onClick={() => console.log(option.label)}>
                {option.label}
              </CustomButton>
            ))}
          </div>
        )}

        <div className='mx-10 lg:flex lg:w-full'>
        {inputFields.map((field, index) => (
            <div key={index} className='lg:flex lg:justify-between lg:w-full'>
              <InputField {...field} onChange={handleChange} />
            </div>
          ))}
          {error && <p className='text-red-500'>{error}</p>}
        </div>

        <div className='lg:flex lg:justify-between w-full'>
            <div className='mx-10 lg:flex lg:w-full'>
              {floor.map((field, index) => (
                  <div key={index} className='lg:flex lg:justify-between'>
                    <InputField {...field} onChange={handleChange} />
                  </div>
                ))}
                {error && <p className='text-red-500'>{error}</p>}
              </div>

            <div className='mx-10 lg:flex lg:w-full'>

                <div className='my-10 flex flex-col'>
                  <p className='text-xl my-2 lg:my-0 lg:mb-[27px] font-semibold'>Property Facing <span className='text-red-500'>*</span></p>
                  <div className='lg:flex lg:w-full lg:items-end md:w-full'>
                    <Select>
                      <SelectTrigger className="lg:w-[315px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="north">North</SelectItem>
                        <SelectItem value="west">West</SelectItem>
                        <SelectItem value="east">East</SelectItem>
                        <SelectItem value="south">South</SelectItem>
                        <SelectItem value="south-east">South-East</SelectItem>
                        <SelectItem value="south-west">South-West</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              {error && <p className='text-red-500'>{error}</p>}
          </div>
        </div>

        <div className='mx-10 mb-10'>
          <p className='text-xl font-semibold'>Property Age <span className='text-red-500'>*</span></p>
          <div className='flex'>
            <div className='my-3 rounded-xl space-y-2 md:space-y-0 md:gap-3 lg:gap-5 flex flex-col md:flex-row md:w-11/12 flex-wrap w-full'>
              {propertyAge.map((option) => (
                <CustomButton key={option.name} onClick={() => console.log(option.label)}>
                  {option.label}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-10'>
          <p className='text-xl font-semibold'>BHK Type <span className='text-red-500'>*</span></p>
          <div className='flex'>
            <div className='my-3 rounded-xl md:space-y-0 md:gap-3 lg:gap-10 flex gap-2 flex-row md:w-11/12 flex-wrap'>
              {bhkType.map((option) => (
                <CustomButton key={option.name} onClick={() => console.log(option.label)}>
                  {option.label}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-xl font-semibold'>Bathrooms / Toilets <span className='text-red-500'>*</span></p>
          <div className='flex'>
            <div className='my-3 rounded-xl gap-2 md:space-y-0 md:gap-3 lg:gap-10 flex flex-row md:w-11/12 flex-wrap'>
              {bathroom.map((option) => (
                <CustomButton key={option.name} onClick={() => console.log(option.label)}>
                  {option.label}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-10'>
          <p className='text-xl font-semibold'>Balcony <span className='text-red-500'>*</span></p>
          <div className='flex'>
            <div className='my-3 rounded-xl gap-2 md:space-y-0 md:gap-3 lg:gap-10 flex flex-row md:w-11/12 flex-wrap'>
              {balcony.map((option) => (
                <CustomButton key={option.name} onClick={() => console.log(option.label)}>
                  {option.label}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-xl font-semibold'>Tenet Preference <span className='text-red-500'>*</span></p>
          <div className='flex'>
            <div className='my-3 rounded-xl space-y-2 md:space-y-0 md:gap-3 lg:gap-5 flex flex-col md:flex-row md:w-11/12 flex-wrap w-full'>
              {tenetPreference.map((option) => (
                <CustomButton key={option.value} onClick={() => console.log(option.label)}>
                  {option.label}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-10 mb-10'>
          <p className='text-xl font-semibold'>Availability <span className='text-red-500'>*</span></p>
          <div className='flex'>
            <div className='my-3 rounded-xl space-y-2 md:space-y-0 md:gap-3 lg:gap-5 flex flex-col md:flex-row md:w-11/12 flex-wrap w-full'>
              {availability.map((option) => (
                <CustomButton key={option.value} onClick={() => console.log(option.label)}>
                  {option.label}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-10 lg:w-11/12 my-10'>
          <p className='text-xl font-semibold mb-3'>Property Description <span className='text-red-500'>*</span></p>
          <Textarea />
        </div>

      </div>
    </> 
  );
};

export default PropertyDateils;
