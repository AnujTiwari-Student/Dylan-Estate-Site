import React from 'react';
import CustomRadioGroup from './RadioGroup';
import InputField from './InputField';
import { Button } from './ui/button';

interface UserInformationProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  formData: { name: string; country: string; phone: string; email: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  error: string;
}

const UserInformation: React.FC<UserInformationProps> = ({ selectedValue, setSelectedValue, formData, handleChange, handleSubmit, error }) => {
  const radioOptions = [
    { value: 'option-one', label: 'Owner' },
    { value: 'option-two', label: 'Builder' },
  ];

  const inputFields = [
    { label: 'Your Name', placeholder: 'Name', type: 'text', name: 'name' },
    { label: 'Country', placeholder: 'Country', type: 'text', name: 'country' },
    { label: 'Phone', placeholder: '000-000-000', type: 'text', prefix: '+91', name: 'phone' },
    { label: 'Email', placeholder: 'example@.com', type: 'email', name: 'email' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-[#fcf8f4] rounded-lg sticky'>
        <h1 className='text-xl text-center py-4 px-16 font-semibold lg:text-start'>LETS GET YOU STARTED!</h1>
      </div>
      <div className='overflow-y-auto h-72'>
        <div className='flex flex-col space-y-4 mx-16 my-10'>
          <p className='text-xl font-semibold'>
            <span className='text-red-500'>*</span> I am:
          </p>
          <div className='flex flex-row'>
            <CustomRadioGroup selectedValue={selectedValue} onValueChange={setSelectedValue} options={radioOptions} />
          </div>
          {inputFields.map((field, index) => (
            <div key={index}>
              <InputField {...field} onChange={handleChange} />
              {index === 2 && <p className='font-semibold text-lg mt-4 -mb-8'>OR</p>}
            </div>
          ))}
          {error && <p className='text-red-500'>{error}</p>}
        </div>
      </div>
      <div className='bg-[#fcf8f4] rounded-lg relative bottom-0'>
        <div className='mx-12 flex justify-between items-center'>
          <h1 className='text-sm text-center text-gray-400 py-4 lg:text-start'>Need Help? <span className='font-semibold text-black'>Call 9999999999</span></h1>
          <Button variant='default'>
            <p className='text-lg font-normal'>NEXT</p>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UserInformation;
