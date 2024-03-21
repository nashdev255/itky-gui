'use client';

import { useState } from 'react';
import Loading from '@/app/components/Loading';
import SubmitButton from '@/app/features/components/dashboard/SubmitButton';

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);

    const formElement = document.querySelector('form');
    const formData = new FormData(formElement!);

    const editTarget = (() => {
      const et = formData.get('editTarget')?.toString();
      if ( et === 'Monsters' )  return 'monster';
      if ( et === 'Weapons' )   return 'weapon';
      if ( et === 'Armors' )    return 'armor';
      if ( et === 'Items' )     return 'item';
      if ( et === 'Materials' ) return 'material';
    })();

    try {
      await fetch(
        'https://api.github.com/repos/nashdev255/github-dispatch-test/actions/workflows/echo.yml/dispatches',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
          body: `{"ref":"master","inputs":{"message": "${editTarget}"}}`
        }
      );
    } catch ( error ) {
      setMessage('' + error);
      alert('' + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='p-8'
    >
      <h1 className='mb-8 px-8 text-center text-2xl font-bold md:text-left'>ドキュメントに追加する</h1>
      <div className='mb-8 flex space-x-4'>
        <p className='flex items-center text-xl'>追加項目</p>
        <select
          name="editTarget"
          className='border-2 px-3 py-2'
        >
          <option>Monsters</option>
          <option>Weapons</option>
          <option>Armors</option>
          <option>Items</option>
          <option>Materials</option>
        </select>
      </div>
      <div className='absolute bottom-8 right-8'>
        {loading ? (
          <div className='flex h-14 w-28 items-center justify-center'>
            <Loading />
          </div>
        ) : (
          <SubmitButton />
        )}
      </div>
    </form>
  );
};

export default Form;
