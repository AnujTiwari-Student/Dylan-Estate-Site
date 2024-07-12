import React, { useState } from 'react';
import CustomRadioGroup from './RadioGroup';
import { Checkbox } from './ui/checkbox';

interface Option {
  value: string;
  label: string;
}

function FeaturesPage() {
  const [selectedFoodType, setSelectedFoodType] = useState<string>('');
  const [selectedPets, setSelectedPets] = useState<string>('');
  const [selectedElectricity, setSelectedElectricity] = useState<string>('');
  const [selectedWaterSupply, setSelectedWaterSupply] = useState<string>('');
  const [selectedFurnish, setSelectedFurnish] = useState<string>('');

  const foodType: Option[] = [
    { value: 'allow', label: 'Allowed' },
    { value: 'notallow', label: 'Not Allowed' },
  ];

  const pets: Option[] = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  const electricity: Option[] = [
    { value: 'powercut', label: 'Rare/No Powercut' },
    { value: 'nopowercut', label: 'Frequent Powercut' },
  ];

  const waterSupply: Option[] = [
    { value: 'municipal', label: 'Municipal Corporation (BMC)' },
    { value: 'borewell', label: 'Borewell' },
    { value: 'both', label: 'Both' },
  ];

  const furnish: Option[] = [
    { value: 'full', label: 'Fully Furnished' },
    { value: 'semi', label: 'Semi Furnished' },
    { value: 'unfurnished', label: 'Unfurnished' },
  ];

  return (
    <div className='w-full border'>
      <div className='overflow-y-auto h-80 md:h-96 lg:h-80 md:max-w-[720px] lg:max-w-[960px] overflow-x-hidden'>
        <p className='text-xl md:text-lg font-semibold my-10 mx-10 md:mx-16'>General Features</p>

        <div className='md:mx-16 mx-10 flex- flex-col'>
          <div className='my-3'>
            <p className='text-lg font-semibold'>Non Veg <span className='text-red-500'>*</span></p>
          </div>
          <div>
            <CustomRadioGroup
              selectedValue={selectedFoodType}
              onValueChange={setSelectedFoodType}
              options={foodType}
            />
          </div>
        </div>

        <div className='md:mx-16 mx-10 my-10 flex- flex-col'>
          <div className='my-3'>
            <p className='text-lg font-semibold'>Pets Allowed <span className='text-red-500'>*</span></p>
          </div>
          <div>
            <CustomRadioGroup
              selectedValue={selectedPets}
              onValueChange={setSelectedPets}
              options={pets}
            />
          </div>
        </div>

        <div className='md:mx-16 mx-10 my-10 flex- flex-col'>
          <div className='my-3'>
            <p className='text-lg font-semibold'>Electricity <span className='text-red-500'>*</span></p>
          </div>
          <div>
            <CustomRadioGroup
              selectedValue={selectedElectricity }
              onValueChange={setSelectedElectricity}
              options={electricity}
            />
          </div>
        </div>

        <div className='md:mx-16 mx-10 my-10 flex- flex-col'>
          <div className='my-3'>
            <p className='text-lg font-semibold'>Water Supply <span className='text-red-500'>*</span></p>
          </div>
          <div>
            <CustomRadioGroup
              selectedValue={selectedWaterSupply }
              onValueChange={setSelectedWaterSupply}
              options={waterSupply}
            />
          </div>
        </div>

        <div className='mx-10 md:mx-16 my-10 border border-gray-300'></div>

        <div className='md:mx-16 mx-10 my-10 flex- flex-col'>
          <div className='my-3'>
            <p className='text-lg font-semibold'>Furnishing <span className='text-red-500'>*</span></p>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items center'>
            {furnish.map((item , index)=>(
              <div key={index} className='flex items-center space-x-2'>
                <Checkbox />
                <p className='text-lg'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='mx-10 md:mx-16 my-10 border border-gray-300'></div>

        

      </div>
    </div>
  );
}

export default FeaturesPage;
