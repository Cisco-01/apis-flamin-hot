"use client";

import { useState } from "react";
import ListOfDigimons from "./ListOfDigimons";
import DigimonInfo from "./DigimonInfo";
import { useFetch } from "../hooks/useFetch";

export default function Digimon() {
  const [digimons, setDigimons] = useState([]);
  const [url, setUrl] = useState("https://digi-api.com/api/v1/digimon");
  const { data, loading, error } = useFetch(url);
  const [dapi, setDapi] = useState();

  //FETCH PARA OBTENER LOS DATOS DE CADA POKEMON
  /*const getDigimon = async (res) => {
    const digiData = await Promise.all(
      res.map(async (item) => {
        const response = await fetch(item.url, { next: { revalidate: 30 } });
        const data = await response.json();
        return data;
      })
    );
    setDigimons(digiData);
  };*/

  return (
    <div className="container md:w-full m-auto pt-24 flex">
      <div className="left-content grid lg:grid-cols-[repeat(auto-fit,minmax(200px,0.5fr))] gap-8">
        <ListOfDigimons
          digimons={digimons}
          data={data}
          loading={loading}
          error={error}
          infoDigimon={(item) => setDapi(item)}
        />
      </div>
      {/*<div className="right-content w-1/2 fixed text-center text-white top-56 sm:top-52 md:top-56 lg:top-60 right-2">
        <DigimonInfo dapi={dapi} />
      </div>*/}
    </div>
  );
}
