"use client";

import { useEffect, useState } from "react";
import Loading from "../components/loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";

export default function ListOfEpisodes({ characterUrl }) {
  const [episodesDetails, setEpisodesDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      try {
        // Obtener los detalles de los episodios
        const episodePromises = characterUrl.map((epUrl) =>
          fetch(epUrl).then((response) => response.json())
        );
        const episodesData = await Promise.all(episodePromises);
        setEpisodesDetails(episodesData); // Almacenar los episodios completos
      } catch (error) {
        console.error("Error fetching episodes:", error);
      } finally {
        setLoading(false);
      }
    };

    if (characterUrl && characterUrl.length > 0) {
      fetchEpisodes(); // Solo buscar episodios si hay URLs
    }
  }, [characterUrl]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="justify-center w-full flex">
            🎞️ EPISODES
          </AccordionTrigger>
          <AccordionContent>
            {episodesDetails.length > 0 ? (
              episodesDetails.map((episode) => (
                <article
                  key={episode.id}
                  className="text-start text-sm md:text-base 2xl:text-lg text-white"
                >
                  <h3 className="font-bold text-gray-300">{episode.name}</h3>
                  <hr className="mr-8 my-1" />
                  <p>Air Date: {episode.air_date}</p>
                  <p>Episode: {episode.episode}</p>
                  <p>Characters: {episode.characters.length}</p>
                </article>
              ))
            ) : (
              <p className="text-gray-400 text-center text-lg">
                No episodes found for this character.
              </p>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
