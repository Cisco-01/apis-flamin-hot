import Image from 'next/image';
import Loading from '../components/loading';

export default function ListOfPokemons({ pokeData, infoPokemon }) {
  return (
    <>
      {pokeData && pokeData.length > 0 ? (
        pokeData.map((item, index) => (
          <article
            key={index}
            onClick={() => infoPokemon(item)}
            className="flex w-52 md:w-56 xl:w-64 bg-zinc-900 rounded-2xl items-center justify-between box-border mx-auto"
          >
            <p className='animate-pulse text-xs text-yellow-400 px-1'>{item.id}</p>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
              alt={item.name}
              width={70}
              height={70}
              className="rounded hover:transition-all hover:duration-300 hover:scale-110 cursor-pointer m-2"
            ></Image>
            <h1 className="text-sm md:text-base xl:text-lg uppercase">
              <span>{item.name}</span>
            </h1>
            <hr className="mx-4 my-1" />
          </article>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}
