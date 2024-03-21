'use client';

import Form from '@/app/features/components/dashboard/Form';
import { MdOutlineClose } from 'react-icons/md';

const ModalForm = ({ handleClick }: { handleClick: Function }) => {
  return (
    <div className='fixed inset-0 z-50 m-auto h-[90vh] w-[80vw] rounded-xl border-2 bg-white'>
      <Form />
      <button
        onClick={() => handleClick()}
        className='absolute right-4 top-4 rounded-lg p-2 duration-150 hover:bg-slate-600 hover:bg-opacity-[0.30]'
      >
        <MdOutlineClose size={24} />
      </button>
    </div>
  );
};

export default ModalForm;
