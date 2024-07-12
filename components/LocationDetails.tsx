import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MapComponent from './MapComponent';
import citiesInIndia from './Cities';

const LocationDetails: React.FC = () => {
  const [building, setBuilding] = useState('');
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]); // Default position (London)
  const [zoom, setZoom] = useState(13);
  const [selectedCity, setSelectedCity] = useState('');

const handleCityChange = (selectedCity: any) => {
  setSelectedCity(selectedCity);
};

  const handleSelectChange = (field: string, value: string) => {
    switch (field) {
      case 'building':
        setBuilding(value);
        break;
      case 'locality':
        setLocality(value);
        break;
      case 'landmark':
        setLandmark(value);
        break;
      case 'city':
        setCity(value);
        break;
    }

    // Example: Update the position based on the selected value
    if (value === 'Building 1') {
      setPosition([40.712776, -74.005974]); // Example: New York City
      setZoom(12);
    } else if (value === 'Building 2') {
      setPosition([34.052235, -118.243683]); // Example: Los Angeles
      setZoom(12);
    } else if (value === 'Building 3') {
      setPosition([51.505, -0.09]); // Example: London
      setZoom(13);
    }
  };

  const buildingOptions = ['Building 1', 'Building 2', 'Building 3'];
  const localityOptions = ['Locality 1', 'Locality 2', 'Locality 3'];
  const landmarkOptions = ['Landmark 1', 'Landmark 2', 'Landmark 3'];
  const cityOptions = ['City 1', 'City 2', 'City 3'];

  return (
    <div className='border'>
      <div className='overflow-y-auto h-80 md:h-96 lg:h-80 md:max-w-[720px] lg:max-w-[960px] overflow-x-hidden'>
        <div className='flex flex-col lg:flex-row w-full lg:justify-between'>
          <div className='flex flex-col my-10 mx-10 md:mx-16'>
            <div className='mb-2'>
              <p className='text-lg font-semibold'>Building / Society Name <span className='text-red-500'>*</span></p>
            </div>
            <div>
              <Select onValueChange={(value) => handleSelectChange('building', value)} value={building}>
                <SelectTrigger className="lg:w-[300px]">
                  <SelectValue placeholder="Enter Building Name" />
                </SelectTrigger>
                <SelectContent>
                  {buildingOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='flex flex-col lg:my-10 mx-10 md:mx-16'>
            <div className='mb-2'>
              <p className='text-lg font-semibold'>Locality / Area <span className='text-red-500'>*</span></p>
            </div>
            <div>
              <Select onValueChange={(value) => handleSelectChange('locality', value)} value={locality}>
                <SelectTrigger className="lg:w-[300px]">
                  <SelectValue placeholder="Enter Area" />
                </SelectTrigger>
                <SelectContent>
                  {localityOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full lg:justify-between'>
          <div className='flex flex-col my-10 lg:my-0 mx-10 md:mx-16'>
            <div className='mb-2'>
              <p className='text-lg font-semibold'>Landmark / Street Name <span className='text-red-500'>*</span></p>
            </div>
            <div>
              <Select onValueChange={(value) => handleSelectChange('landmark', value)} value={landmark}>
                <SelectTrigger className="lg:w-[300px]">
                  <SelectValue placeholder="Enter Landmark" />
                </SelectTrigger>
                <SelectContent>
                  {landmarkOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='flex flex-col mx-10 md:mx-16'>
            <div className='mb-2'>
              <p className='text-lg font-semibold'>City <span className='text-red-500'>*</span></p>
            </div>
            <div>
              <Select onValueChange={(value) => handleCityChange(value)} value={city}>
                <SelectTrigger className="lg:w-[300px]">
                  <SelectValue placeholder="Enter Your City" />
                </SelectTrigger>
                <SelectContent>
                {cityOptions.map(city => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className='mx-10 md:mx-16 my-10'>
          <div>
            <p className='text-lg font-semibold mb-2'>Mark Locality on Map</p>
          </div>
          <div>
            <MapComponent position={position} zoom={zoom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
