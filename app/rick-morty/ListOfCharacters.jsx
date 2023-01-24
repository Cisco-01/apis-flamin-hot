import Image from 'next/image';

export default function ListOfCharacters({ characters }) {
  return (
    <section
      className="px-5 mb-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center items-center"
    >
      {characters.map(item => (
        <article key={item.id} className="m-10 indent-4">
          {item.status === 'Alive' ? (
            <div className="bg-green-500 w-6 h-6 animate-pulse rounded-full ml-auto"></div>
          ) : (
            <div className="bg-red-500 w-6 h-6 animate-pulse rounded-full ml-auto"></div>
          )}
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={300}
            className="m-auto rounded hover:transition-all hover:duration-300 hover:scale-105 cursor-pointer"
          ></Image>
          <h1 className="text-lg mt-2">
            Name: <span>{item.name}</span>
          </h1>
          <hr className="mx-4 my-1" />
          <p>Species: {item.species}</p>
          {item.type === '' ? null : <p>Type: {item.type}</p>}
          <p>Gender: {item.gender}</p>
          <p>Location: {item.location.name}</p>
        </article>
      ))}
    </section>
  );
}
