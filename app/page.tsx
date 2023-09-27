import Image from 'next/image';
import Link from 'next/link';
import Cards from './utils/cards';
import Footer from './components/Footer';

export default async function HomePage() {
  return (
    <>
      <section className="columns-2 sm:columns-3 gap-4 my-8">
        {Cards.map((item, i) => (
          <div className="relative mb-4 md:mb-8">
            <Link href={item.url} className="inline-block" key={i}>
              <Image
                id={item.id}
                src={item.path}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="object-contain hover:transition-all hover:duration-700 hover:scale-105 rounded-lg ease-in-out"
              ></Image>
            </Link>
          </div>
        ))}
      </section>
      <div className='sticky bottom-0'>
        <Footer />
      </div>
    </>
  );
}
