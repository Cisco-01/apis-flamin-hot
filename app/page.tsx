import Image from 'next/image';
import Link from 'next/link';
import Cards from './utils/cards';

export default async function HomePage() {
  return (
    <section
      className="grid text-center 3xl:flex flex-wrap justify-center items-center box-border gap-8 my-5"
    >
      {Cards.map((item, i) => (
        <Link
          href={item.url}
          className="inline-flex mx-auto my-3 rounded-full"
          key={i}
        >
          <Image
            id={item.id}
            src={item.path}
            alt={item.title}
            width={275}
            height={275}
            className="hover:transition-all hover:duration-500 hover:scale-105 rounded-[80px]"
          ></Image>
        </Link>
      ))}
    </section>
  );
}
