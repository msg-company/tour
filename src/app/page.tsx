"use client";

import ArrivalInformation from "@/app/_components/arrival-information/arrival-information";
import GuideInformation from "@/app/_components/guide-information/guide-information";
import { Accommodation } from "@/app/_components/accommodation/accommodation";
import { TourProgram } from "@/app/_components/tour-program/tour-program";
import { Gallery } from "@/app/_components/gallery/gallery";
import { ReservationBlock } from "@/app/_components/reservation-block/reservation-block";
import { TourInformation } from "@/app/_components/tour-information/tour-information";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <span className="text-xl text-black">BaszynskiTour</span>
        </div>
      </header>
      <main className="flex-col items-start justify-between">
        <Gallery />
        <div className="container mx-auto mt-7 flex items-start justify-between">
          <div className="mr-10 flex w-2/3 flex-col">
            <TourInformation />
            <GuideInformation />
            <ArrivalInformation />
            <Accommodation />
            <TourProgram />
          </div>
          <div className="sticky top-20 flex w-1/3">
            <ReservationBlock />
          </div>
        </div>
        <section className="container mx-auto h-[1000px] bg-white">
          <h3 className="mt-8 text-3xl font-bold">Включено в стоимость</h3>
        </section>
      </main>
    </>
  );
}
