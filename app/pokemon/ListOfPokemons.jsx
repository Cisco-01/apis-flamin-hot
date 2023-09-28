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
            className="flex w-40 h-14 md:w-52 xl:w-60 bg-zinc-900 rounded-2xl items-center justify-between box-border mx-auto cursor-pointer"
          >
            <Image
              className="rounded hover:transition-all hover:duration-300 hover:scale-110 cursor-pointer m-2"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
              alt={item.name}
              width={30}
              height={30}
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
