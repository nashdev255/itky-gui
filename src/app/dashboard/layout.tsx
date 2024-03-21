'use client';

import { useState } from 'react';
import ModalForm from '@/app/features/components/dashboard/ModalForm';
import FloatingButton from '@/app/features/components/dashboard/FloatingButton';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      { children }
      {isModalOpen ? (
        <ModalForm handleClick={handleModalClose} />
      ) : (
        <></>
      )}
      <FloatingButton handleClick={handleModalOpen} />
    </>
  );
};

export default DashboardLayout;
