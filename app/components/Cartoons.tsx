import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../../@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../@/components/ui/carousel";

interface CardItem {
  id: string;
  url: string;
  path: string;
  title: string;
  width: number;
  height: number;
  hoverShadow: string;
}

interface CardGridProps {
  cards: CardItem[];
}

export const Cartoons = ({ cards }: CardGridProps) => {
  return (
    <div id="explore" className="flex w-full justify-center">
      <section className="flex flex-col md:flex-row space-y-4 md:w-full mx-auto justify-center items-center">
        <p className="text-[clamp(1.25rem,3.5vw+1rem,5rem)] text-center translate-x-3">
          EXPLORE
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {cards.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex">
                      <Link href={item.url} passHref>
                        <Image
                          src={item.path}
                          alt={item.title}
                          width={item.width}
                          height={item.height}
                          className={`transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg mx-auto hover:shadow-xl ${item.hoverShadow} shadow`}
                        />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full mx-auto text-center items-center">
            <div className="left-0">
              <CarouselPrevious />
            </div>
            <div className="left-0">
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </section>
    </div>
  );
};
