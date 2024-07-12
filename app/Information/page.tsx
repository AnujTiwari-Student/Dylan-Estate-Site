import Container from '@/components/ContainerComponent';
import PageHeader from '@/components/PageHeader';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className='bg-white'>
      <PageHeader />
      <Container />
    </div>
  );
};

export default Page;

