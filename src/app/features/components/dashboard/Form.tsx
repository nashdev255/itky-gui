const Form = () => {
  const handleSubmit = () => {

  };

  return (
    <form
      onSubmit={handleSubmit}
      className='p-8'
    >
      <h1 className='mb-8 px-8 text-2xl font-bold'>ドキュメントに追加する</h1>
      <div className='mb-8 flex space-x-4'>
        <p className='flex items-center text-xl'>追加項目</p>
        <select
          name=""
          className='border-2 px-3 py-2'
        >
          <option>Monsters</option>
          <option>Weapons</option>
          <option>Armors</option>
          <option>Items</option>
          <option>Materials</option>
        </select>
      </div>
      <button className='absolute bottom-8 right-8 h-14 w-28 rounded-full border-2 border-sky-500 bg-sky-400 shadow-lg hover:scale-95 hover:bg-sky-500 hover:shadow-none'>
        <p className='text-lg font-bold text-white'>送信</p>
      </button>
    </form>
  );
};

export default Form;
