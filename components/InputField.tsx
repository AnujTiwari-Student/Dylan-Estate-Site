import React from 'react';
import { Input } from './ui/input';
import { ChevronDown } from 'lucide-react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  prefix?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type, name, prefix, onChange }) => {
  return (
    <div className='lg:w-8/12'>
      <p className='font-semibold text-lg mt-8 mb-2'>
        {label} <span className='text-red-500'>*</span>
      </p>
      <div className={prefix ? 'flex items-center' : ''}>
        {prefix && (
          <p className='border border-black rounded-md font-semibold py-2 pl-4 pr-4 flex items-center'>
            {prefix}<span><ChevronDown size={15}/></span>
          </p>
        )}
        <Input type={type} name={name} placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
};

export default InputField;
