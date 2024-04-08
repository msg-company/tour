"use client";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Brain, Clock } from "lucide-react";
import { TourMap } from "@/app/_components/tour-map/tour-map";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "/1.jpg",
  },
  {
    artist: "Tom Byrom",
    art: "/1.jpg",
  },
  {
    artist: "Vladimir Malyavko",
    art: "/1.jpg",
  },
];

export function RecommendedTours() {
  return (
    <section className="justify-betwee mt-7 flex h-[1000px] flex-col items-start bg-gray-100">
      <div className="container flex max-w-screen-2xl flex-col ">
        <h3 className="mt-8 text-3xl font-bold">
          Посмотрите похожие приключения
        </h3>
        <ScrollArea className="w-full" type="always">
          <div className="flex w-max space-x-4 p-4 first:pl-0">
            {works.map((artwork) => (
              <div
                className="group w-[276px] cursor-pointer rounded-md bg-white transition-all duration-700 hover:shadow-md"
                key={artwork.artist}
              >
                <div className="overflow-hidden rounded-t-md">
                  <Image
                    src="/1.jpg"
                    alt="React Rendezvous"
                    loading="lazy"
                    width="350"
                    height="350"
                    className="aspect-[4/3] h-auto w-auto object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col px-3 pb-4">
                  <div>
                    <div className="flex w-full flex-col text-sm">
                      <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                        Франция, Германия
                      </p>
                      <h3 className="truncate pt-1 text-lg font-medium">
                        Тур в Париж, замки Луары и Руан Тур в Париж, замки Луары
                        и Руан
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                        Трёхразовое изысканное питание + напитки по системе «Всё
                        Включено» (около 100 видов безалкогольных и алкогольных
                        напитков, коктейлей)
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-semibold tracking-tight">
                        240 €
                      </p>
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <p className="ml-1 text-base tracking-tight text-gray-500">
                          7 дней
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex">
                      <div className="inline-flex items-center rounded-sm border border-gray-100 px-2.5 py-0.5 text-xs font-semibold  text-gray-500">
                        28 апр. - 4 мая
                      </div>
                      <div className="ml-1.5 inline-flex items-center rounded-sm border border-gray-100 bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
                        +3 даты
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
