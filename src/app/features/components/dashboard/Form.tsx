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

    const editTarget = formData.get('editTarget')?.toString();
    const contentName = formData.get('name')?.toString();
    const rarity = formData.get('rarity')?.toString();
    const price = formData.get('price')?.toString();
    const whenEnable = formData.get('whenEnable')?.toString();
    const description = formData.get('description')?.toString();
    const effection = formData.get('effection')?.toString();
    const isConsumable = formData.get('isConsumable')?.toString();

    try {
      await fetch(
        'https://api.github.com/repos/nashdev255/github-dispatch-test/actions/workflows/echo.yml/dispatches',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
          body: `{
            "ref":"master",
            "inputs":{
              "message": "${editTarget}"
            }
          }`
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
      <div className='flex justify-center md:justify-start'>
        <div className='md:px-8'>
          {/* 追加項目の選択 */}
          <div className='mb-6 flex space-x-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>追加項目</p>
            <select
              name="editTarget"
              className='rounded-md border-2 px-3 py-2'
            >
              {/* <option>Monsters</option> */}
              <option value='weapons'>Weapons</option>
              <option value='armors'>Armors</option>
              <option value='items'>Items</option>
              <option value='materials'>Materials</option>
            </select>
          </div>

          {/* 名前の入力 */}
          <div className='mb-6 flex space-x-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>名前</p>
            <input
              name="name"
              type="text"
              className='max-w-48 rounded-md border-2 px-3 py-2'
              required
            />
          </div>

          {/* レア度の選択 */}
          <div className='mb-6 flex space-x-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>レア度</p>
            <select
              name="rarity"
              className='rounded-md border-2 px-3 py-2'
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          {/* 価格の入力 */}
          <div className='mb-6 flex space-x-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>価格</p>
            <input
              name="price"
              type="number"
              className='max-w-48 rounded-md border-2 px-3 py-2'
              required
            />
          </div>

          {/* 使用可能時の選択 */}
          <div className='mb-6 flex space-x-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>使用可能時</p>
            <select
              name="whenEnable"
              className='rounded-md border-2 px-3 py-2'
            >
              <option value='onMenu'>メニュー画面</option>
              <option value='onFight'>戦闘画面</option>
              <option value='always'>常時</option>
              <option value='disabled'>使用不可</option>
            </select>
          </div>
          
          {/* 説明の入力 */}
          <div className='mb-6 flex space-x-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>説明</p>
            <textarea
              name="description"
              className='max-w-48 rounded-md border-2 px-3 py-2'
              required
            />
          </div>

          {/* 使用効果の入力 */}
          <div className='mb-6 flex space-x-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>使用効果</p>
            <textarea
              name="effection"
              className='max-w-48 rounded-md border-2 px-3 py-2'
              required
            />
          </div>

          {/* 消費の有無の選択 */}
          <div className='mb-6 flex flex-col space-y-4 md:mb-8'>
            <p className='flex items-center md:text-xl'>消費の有無</p>
            <div className='flex items-center space-x-4'>
              <div>
                <input
                  type='radio' name='isConsumable' value='consumable' defaultChecked={true} />
                <label htmlFor='consumable'>あり</label>
              </div>
              <div>
                <input type='radio' name='isConsumable' value='unconsumable' />
                <label htmlFor='unconsumable'>なし</label>
              </div>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className='absolute bottom-8 right-8'>
            {loading ? (
              <div className='flex h-14 w-28 items-center justify-center'>
                <Loading />
              </div>
            ) : (
              <SubmitButton />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
