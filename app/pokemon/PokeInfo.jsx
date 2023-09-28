import Image from 'next/image';
import React from 'react';

function PokeInfo({ data }) {
  console.log(data);
  return (
    <>
      {!data ? (
        ''
      ) : (
        <>
          <h1 className="uppercase font-bold tracking-widest">{data.name}</h1>
          <Image
            className="mx-auto md:w-52 xl:w-60"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
            width={100}
            height={100}
          />
          <div className="abilities w-[30%] m-auto flex justify-around items-center mt-4 space-x-4">
            {data.abilities.map(poke => (
              <div className="group mr-2 lg:mx-0">
                <h2 className='px-2 text-base'>{poke.ability.name}</h2>
              </div>
            ))}
          </div>
          <div className="base-stat mt-8">
            {data.stats.map(poke => {
              return (
                <div className='flex justify-center uppercase'>
                  <h3 className='font-extralight'>
                    {poke.stat.name}:
                  </h3>
                  <span className='font-light'>{poke.base_stat}</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default PokeInfo;
