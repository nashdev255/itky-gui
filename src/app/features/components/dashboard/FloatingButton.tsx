import { MdEdit } from 'react-icons/md';

const FloatingButton = ({}) => {
  return (
    <button
      className='fixed bottom-10 right-10 z-50 flex size-16 items-center justify-center rounded-full border-2 border-sky-500 bg-sky-400 shadow-lg hover:brightness-90'
    >
      <MdEdit size={32} color='white' />
    </button>
  );
};

export default FloatingButton;
