import Image from "next/image";
import Loading from "../components/loading";
import { Skull } from "lucide-react";
import { Paginator } from "./Paginator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../@/components/ui/hover-card";
import ListOfLocations from "./ListOfLocations";
import ListOfEpisodes from "./ListOfEpisodes";

export default function ListOfCharacters({
  info,
  locations,
  characters,
  episodes,
  page,
  handlePaginationChange,
}) {
  const getColorStatus = (status) => {
    switch (status) {
      case "Alive":
        return "🟢 Alive";
      case "Dead":
        return "🔴 Dead";
      default:
        return "⚪ Unknown";
    }
  };

  return (
    <>
      <Paginator
        info={info}
        page={page}
        handlePaginationChange={handlePaginationChange}
      />
      {characters && characters.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-3">
          {characters.map((character) => {
            // Verificar si 'location' es una URL o un objeto
            let locationName = "";
            if (typeof character.location === "string") {
              // Si es una cadena (URL), extraemos el ID
              const locationId = character.location.split("/").pop();
              const location = locations.find(
                (loc) => loc.id === parseInt(locationId || "")
              );
              locationName = location ? location.name : "Unknown Location";
            } else if (
              typeof character.location === "object" &&
              character.location.name
            ) {
              // Si es un objeto con 'name', usamos ese valor
              locationName = character.location.name;
            }
            return (
              <div key={character.id} className="m-10 relative group">
                {character.status === "Alive" && (
                  <Skull className="absolute w-6 h-6 animate-pulse rounded-full right-0 top-0 stroke-green-500 bg-black/75 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all ease-in-out" />
                )}
                {character.status === "unknown" && (
                  <Skull className="absolute w-6 h-6 animate-pulse rounded-full right-0 top-0 stroke-gray-400 bg-black/75 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all ease-in-out" />
                )}
                {character.status === "Dead" && (
                  <Skull className="absolute w-6 h-6 animate-pulse rounded-full right-0 top-0 stroke-red-500 bg-black/75 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all ease-in-out" />
                )}
                <Image
                  src={character.image}
                  alt={character.name}
                  width={300}
                  height={300}
                  className="m-auto rounded transition-all duration-300 group-hover:scale-105 cursor-pointer object-cover"
                ></Image>
                <article className="text-start text-sm md:text-base 2xl:text-lg flex flex-col space-y-2 text-white">
                  <h3 className="mt-2 font-extrabold text-gray-300 group-hover:text-amber-500">
                    {character.name}
                  </h3>
                  <hr className="mr-8 my-1" />
                  <p className="text-sm flex items-center">
                    {getColorStatus(character.status)} - {character.species}
                  </p>
                  {character.type === "" ? null : <p>Type: {character.type}</p>}
                  {character.gender === "unknown" ? null : (
                    <p>Gender: {character.gender}</p>
                  )}
                  <HoverCard>
                    <HoverCardTrigger>
                      <p className="bg-rose-500/20 hover:bg-rose-500/50 rounded text-center p-1">
                        Information ℹ️
                      </p>
                    </HoverCardTrigger>
                    <HoverCardContent className="border shadow-white shadow-md">
                      <ListOfLocations
                        locationsUrl={character.location.url} // URL de las ubicaciones
                      />
                      <br />
                      <ListOfEpisodes characterUrl={character.episode} />
                    </HoverCardContent>
                  </HoverCard>
                </article>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
