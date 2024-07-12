import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 border border-gray-300 rounded-3xl text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      {children}
    </button>
  );
};

export default CustomButton;
