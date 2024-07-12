import Header from '@/components/Header';
import SmallScreenHeader from '@/components/SmallScreenHeader';
import React from 'react';

const PageHeader: React.FC = () => {
  return (
    <header className="sticky top-0 bg-[#fcf8f4] z-50">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <SmallScreenHeader />
      </div>
    </header>
  );
};

export default PageHeader;
