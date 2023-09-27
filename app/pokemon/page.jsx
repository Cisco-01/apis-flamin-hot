'use client';

import { useEffect, useState } from 'react';
import ListOfPokemons from './ListOfPokemons';
import PokeInfo from './PokeInfo';
import Buttons from '../components/Buttons';

export default function Pokemon() {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10');
  const [nextURL, setNextURL] = useState();
  const [prevURL, setPrevURL] = useState();
  const [pokeDex, setPokeDex] = useState();

  //FETCH PARA OBTENER TODOS LOS POKEMONES
  const fetchPokemons = async () => {
    fetch(url, { next: { revalidate: 30 } })
      .then(response => response.json())
      .then(data => {
        setNextURL(data.next);
        setPrevURL(data.previous);
        getPokemon(data.results);
      })
      .catch(error => console.log(error)),
      {
        keepPreviousData: true,
      };
  };

  //FETCH PARA OBTENER LOS DATOS DE CADA POKEMON
  const getPokemon = async res => {
    const pokeData = await Promise.all(
      res.map(async item => {
        const response = await fetch(item.url, { next: { revalidate: 30 } });
        const data = await response.json();
        return data;
      })
    );
    setPokeData(pokeData);
  };

  useEffect(() => {
    fetchPokemons();
  }, [url]);

  return (
    <>
      <div className="container md:w-full m-auto pt-24 flex">
        <div className="left-content grid lg:grid-cols-[repeat(auto-fit,minmax(200px,0.5fr))] gap-8">
          <ListOfPokemons
            pokeData={pokeData}
            infoPokemon={item => setPokeDex(item)}
          />
          <Buttons
            nextURL={nextURL}
            prevURL={prevURL}
            setPokeData={item => setPokeData(item)}
            setUrl={item => setUrl(item)}
          />
        </div>
        <div className="right-content w-1/2 fixed text-center text-white lg:absolute top-48 sm:top-52 md:top-56 lg:top-80 xl:top-72 right-2">
          <PokeInfo data={pokeDex} />
        </div>
      </div>
    </>
  );
}
