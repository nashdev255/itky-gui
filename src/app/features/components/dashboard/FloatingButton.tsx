import { MdEdit } from 'react-icons/md';

const FloatingButton = ({ handleClick }: { handleClick: Function }) => {
  return (
    <button
      onClick={() => handleClick()}
      className='fixed bottom-10 right-10 z-40 flex size-16 items-center justify-center rounded-full border-2 border-sky-500 bg-sky-400 shadow-lg hover:brightness-90'
    >
      <MdEdit size={32} color='white' />
    </button>
  );
};

export default FloatingButton;
