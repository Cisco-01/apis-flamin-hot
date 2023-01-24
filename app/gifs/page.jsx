'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import ListOfGifs from './ListOfGifs';

export default function GifsPage() {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(
    () =>
      async function () {
        ListOfGifs({ keyword: keyword }).then(gifs => setGifs(gifs));
      },
    [keyword, setGifs]
  );

  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-md p-3 mb-5 mx-auto">
        <input
          className="relative w-72 h-10 rounded-md border-[#FE9203] bg-transparent 
              pl-2 text-orange-200 focus:border-transparent outline-double outline-3 outline-offset-2 outline-[#FE9203]
              focus:ring-transparent sm:text-sm focus:outline focus:scale-110"
          type="text"
          id="myInput"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          title="Buscar"
          placeholder="Buscar Gifs"
        />
      </div>
      <section
        className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center items-center"
      >
        {gifs.map(singleGif => (
          <Image
            key={singleGif}
            src={singleGif}
            alt=""
            width={300}
            height={300}
            className="m-5 rounded hover:transition-all hover:duration-300 hover:scale-105 cursor-pointer"
          ></Image>
        ))}
      </section>
    </div>
  );
}
