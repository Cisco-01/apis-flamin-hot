import Image from "next/image";
import Loading from "../components/loading";

export default function ListOfDigimons({
  digimons,
  infoDigimon,
  data,
  loading,
  error,
}) {
  return (
    <>
      {digimons && digimons.length > 0 ? (
        data?.map((item, index) => (
          <article
            key={index}
            onClick={() => infoDigimon(item)}
            className="flex w-36 h-14 md:w-52 xl:w-60 bg-zinc-900 rounded-2xl items-center justify-between box-border mx-auto cursor-pointer"
          >
            <Image
              className="rounded hover:transition-all hover:duration-300 hover:scale-110 cursor-pointer m-2"
              src={`https://digi-api.com/images/digimon/w/${item.name}.png`}
              alt={item.name}
              width={450}
              height={450}
            ></Image>
            <h1 className="text-xs md:text-base xl:text-lg uppercase">
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
