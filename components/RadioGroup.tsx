import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: RadioOption[];
}

const CustomRadioGroup: React.FC<RadioGroupProps> = ({ selectedValue, onValueChange, options }) => {
  return (
    <div className='flex flex-wrap md:flex-row'>
      <RadioGroup value={selectedValue} onValueChange={onValueChange} defaultValue="Owner">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} required />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CustomRadioGroup;
