"use client";

import { useEffect, useState } from "react";
import ListOfCharacters from "./ListOfCharacters";
import Loading from "../components/loading";

export default function RickMorty() {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [infoCharacters, setInfoCharacters] = useState({});
  const [page, setPage] = useState(1);  // Cambié esto para que sea un número, no un array

  const endpoints = {
    characters: `https://rickandmortyapi.com/api/character?page=${page}`,
    locations: `https://rickandmortyapi.com/api/location?page=${page}`,
    episodes: `https://rickandmortyapi.com/api/episode?page=${page}`,
  };

  const fetchAllData = async () => {
    try {
      await Promise.all([
        fetch(endpoints.characters, { next: { revalidate: 30 } }).then(
          (response) =>
            response
              .json()
              .then((data) => {
                setCharacters(data.results || []);
                setInfoCharacters(data.info || {});
              })
              .catch((error) => console.error("Error fetching characters:", error))
        ),
        fetch(endpoints.locations, { next: { revalidate: 30 } }).then(
          (response) =>
            response
              .json()
              .then((data) => {
                setLocations(data.results || []);
              })
              .catch((error) => console.error("Error fetching locations:", error))
        ),
        fetch(endpoints.episodes, { next: { revalidate: 30 } }).then(
          (response) =>
            response
              .json()
              .then((data) => {
                setEpisodes(data.results || []);
              })
              .catch((error) => console.error("Error fetching episodes:", error))
        ),
      ]);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Asegúrate de cambiar el estado de carga incluso si ocurre un error
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [page]); // Aquí solo dependemos de 'page', ya que es lo que determina la actualización de datos

  const handlePaginationChange = (e, value) => {
    e.preventDefault();
    setPage(value); // Actualiza el número de página al cambiar la paginación
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center">
      <ListOfCharacters
        info={infoCharacters}
        characters={characters}
        locations={locations}
        episodes={episodes}
        page={page}
        handlePaginationChange={handlePaginationChange}
      />
    </div>
  );
}
