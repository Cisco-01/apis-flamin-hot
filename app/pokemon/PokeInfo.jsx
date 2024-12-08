import Image from "next/image";
import { ScrollArea } from "../../@/components/ui/scroll-area";
import { Card } from "../../@/components/ui/card";

function PokeInfo({ data }) {
  return (
    <>
      {data ? (
        <Card key={data.id}>
          <div className="group">
            <p
              className={`uppercase font-bold tracking-widest
              ${
                data.id === 14
                  ? "group-hover:-translate-y-20"
                  : "group-hover:-translate-y-24"
              }  transition-all ease-in-out`}
            >
              {data.name}
            </p>
            <Image
              className={`mx-auto ${
                data.id === 14
                  ? "group-hover:scale-[1.5]"
                  : "group-hover:scale-[2]"
              } group-hover:-translate-y-5 transition-all ease-in-out bg-black/50 backdrop-blur rounded-md`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt={data.name}
              width={75}
              height={75}
            />
            <div
              className={`abilities m-auto hidden md:flex justify-center items-center mt-2 gap-2
              ${
                data.id === 14
                  ? "group-hover:translate-y-7"
                  : "group-hover:translate-y-14"
              }  transition-all ease-in-out`}
            >
              {data.abilities.map((poke) => (
                <div className="group mr-2 lg:mx-0 shadow shadow-white" key={poke.ability.url}>
                  <p className="px-2 text-sm capitalize">{poke.ability.name}</p>
                </div>
              ))}
            </div>

            <div
              className={`base-stat mt-2 
              ${
                data.id === 14
                  ? "group-hover:translate-y-6 md:group-hover:translate-y-8"
                  : "group-hover:translate-y-12 md:group-hover:translate-y-16"
              } transition-all ease-in-out`}
            >
              <ScrollArea className="h-52 w-auto rounded-md mx-auto">
                {data.stats.map((poke) => {
                  return (
                    <div className="p-4 my-3 bg-gradient-to-br from-stone-500 to-black rounded-lg shadow-md max-w-xs h-full mx-auto" key={poke.stat.url}>
                      <div className="flex items-center justify-between bg-white/20 backdrop-blur-md p-3 rounded-md shadow-lg">
                        <h3 className="font-semibold text-lg text-white uppercase tracking-wide text-start">
                          {poke.stat.name}:
                        </h3>
                        <span className="font-bold text-xl text-yellow-300">
                          {poke.base_stat}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </ScrollArea>
            </div>
          </div>
        </Card>
      ) : null}
    </>
  );
}

export default PokeInfo;
