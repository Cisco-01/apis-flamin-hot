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
            className="mx-auto md:w-40 xl:w-44"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
            width={75}
            height={75}
          />
          {/*<div className="abilities m-auto flex justify-center items-center mt-2 gap-2">
            {data.abilities.map(poke => (
              <div className="group mr-2 lg:mx-0">
                <h2 className='px-2 text-sm'>{poke.ability.name}</h2>
              </div>
            ))}
          </div>*/}
          <div className="base-stat mt-2">
            {data.stats.map(poke => {
              return (
                <div className='flex justify-center uppercase text-sm'>
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
