import React from 'react';

interface Tab {
  title: string;
  active: boolean;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div className="bg-[#fcf8f4] flex w-full rounded-t-2xl">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`px-10 font-semibold text-center w-full md:w-36 lg:w-48 flex justify-center items-center py-5 border ${tab.active ? 'text-black ' : 'text-gray-400 hidden md:flex'}`}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
