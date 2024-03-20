'use client';

import { useEffect, useState } from 'react';

export type Monster = {
  download_url: string,
  name: string,
};

const Monsters = () => {
  const [imageList, setImageList] = useState<Monster[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          'https://api.github.com/repos/Krostar5793/itky-quest/contents/dot-works',
          {
            method: 'GET',
            headers: { 'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}` }
          }
        );
        if (!res.ok) {
          throw new Error('Failed to fetch data.');
        }
        const data = await res.json();
        const parsedData = JSON.parse(JSON.stringify(data));
        setImageList(parsedData);
      } catch ( error ) {
        setMessage('Error: ' + error);
        alert(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className='px-16 py-8 font-sans text-3xl font-bold'>敵キャラ一覧</h1>
      <div className='flex justify-center py-4'>
        <ul className="flex flex-wrap justify-center gap-2">
          {imageList.map((image, index) => (
            <li key={index} className='flex flex-col items-center'>
              <img
                src={image.download_url}
                alt={image.name}
                className="size-36 md:size-48"
              />
              <p className='py-2 font-bold'>
                {(image.name).toUpperCase().replace('.PNG', '')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Monsters;
