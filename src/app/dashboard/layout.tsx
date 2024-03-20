import FloatingButton from '@/app/features/components/dashboard/FloatingButton';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      { children }
      <FloatingButton />
    </>
  );
};

export default DashboardLayout;
