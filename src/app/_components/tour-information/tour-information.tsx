import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Activity,
  BedDouble,
  CircleHelp,
  Globe,
  InfoIcon,
  Navigation,
  PersonStanding,
} from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Rating } from "@/app/_components/accommodation/_components/rating";
import { DifficultyLevels } from "@/app/_components/accommodation/_components/difficulty-levels";

export function TourInformation() {
  return (
    <section>
      <h1 className="text-5xl font-bold">Тур в Париж, замки Луары и Руан</h1>
      <div className="flex items-center justify-between">
        <div className="mt-7 flex items-center justify-center">
          <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <span className="text-sm text-gray-500">1</span>
          </div>
          <span className="ml-2 text-sm text-black">Выберите дату</span>
        </div>
        <div className="mt-7 flex items-center justify-center">
          <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <span className="text-sm text-gray-500">2</span>
          </div>
          <span className="ml-2 text-sm text-black">Забронируйте место</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-1 h-5 w-5">
                <InfoIcon className="h-5 w-5 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Тур будет проведен даже при неполной группе</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-7 flex items-center justify-center">
          <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <span className="text-sm text-gray-500">3</span>
          </div>
          <span className="ml-2 text-sm text-black">Оплатите безопасно</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-1 h-5 w-5">
                <InfoIcon className="h-5 w-5 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Тур будет проведен даже при неполной группе</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <hr className="m-0 mb-2 mt-4 w-full border-b border-t-0 border-solid border-b-gray-200" />
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-9">
        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex w-full items-center justify-between">
              <p className="text-base font-semibold leading-none tracking-tight text-gray-500">
                Кто уже едет
              </p>
              <PersonStanding className="h-5 w-5" />
            </div>
            <span className="text-sm text-black">3 человека, 20-50 лет</span>
            <span className="text-sm text-black">2 ребенка, 6-16 лет</span>
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <p className="text-base font-semibold leading-none tracking-tight text-gray-500">
                    Активность
                  </p>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <CircleHelp className="ml-1 h-4 w-4 cursor-pointer text-gray-500" />
                    </HoverCardTrigger>
                    <HoverCardContent className="min-w-[900px]">
                      <DifficultyLevels />
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-sm text-black">Средний</span>
              <span className="cursor-pointer text-sm underline underline-offset-4 hover:text-gray-500">
                Смотреть программу
              </span>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold leading-none tracking-tight text-gray-500">
                  Язык
                </p>
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-sm text-black">Русский</span>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <p className="text-base font-semibold leading-none tracking-tight text-gray-500">
                    Комфорт
                  </p>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <CircleHelp className="ml-1 h-4 w-4 cursor-pointer text-gray-500" />
                    </HoverCardTrigger>
                    <HoverCardContent className="min-w-[900px]">
                      <Rating />
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <BedDouble className="h-5 w-5" />
              </div>
              <span className="text-sm text-black">Высокий</span>

              <Link
                href="#anchor_one"
                className="cursor-pointer text-sm underline underline-offset-4 hover:text-gray-500"
              >
                Где будем жить
              </Link>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold leading-none tracking-tight text-gray-500">
                  Маршрут
                </p>
                <Navigation className="h-5 w-5" />
              </div>
              <span className="text-sm text-black">
                Франция, Нормандия, Париж
              </span>
              <span className="cursor-pointer text-sm underline underline-offset-4 hover:text-gray-500">
                Весь маршрут
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
