import Image from "next/image";

function DigimonInfo({ dapi }) {
  return (
    <>
      {!dapi ? (
        ""
      ) : (
        <div>
          <h1 className="uppercase font-bold tracking-widest">{dapi.name}</h1>
          <Image
            className="mx-auto md:w-40 xl:w-44"
            src={`https://digi-api.com/images/digimon/w/${dapi.name}.png`}
            alt={dapi.name}
            width={75}
            height={75}
          />
        </div>
      )}
    </>
  );
}

export default DigimonInfo;
