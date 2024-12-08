"use client";

import { useEffect, useState } from "react";
import Loading from "../components/loading";

export default function ListOfLocations({ locationsUrl }) {
  const [locationDetails, setLocationDetails] = useState(null); // Para un solo objeto, no un array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const response = await fetch(locationsUrl, {
          next: { revalidate: 30 },
        });
        const data = await response.json();
        setLocationDetails(data || {}); // Guardar los detalles de la ubicación
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (locationsUrl) {
      fetchLocations();
    }
  }, [locationsUrl]); // Dependencia de locationsUrl

  if (loading) {
    return <Loading />;
  }

  if (!locationDetails) {
    return (
      <p className="text-gray-400 text-center text-lg">
        No location details found.
      </p>
    );
  }

  return (
    <>
      <span className="justify-center w-full flex">LOCATIONS 🌍</span>
      <article className="text-start text-sm md:text-base 2xl:text-lg text-white">
        <h3 className="font-bold text-gray-300">{locationDetails.name}</h3>
        <hr className="mr-8 my-1" />
        <p>Type: {locationDetails.type}</p>
        <p>Dimension: {locationDetails.dimension}</p>
        <p>Residents: {locationDetails.residents.length}</p>
      </article>
    </>
  );
}
