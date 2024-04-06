import {
  AirVent,
  BatteryCharging,
  Briefcase,
  BusFront,
  Lightbulb,
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react";

export default function ArrivalInformation() {
  return (
    <section className="relative">
      <h3 className="mt-8 text-3xl font-bold">Информация по прибытию</h3>

      <p className="mt-4 text-lg font-medium">Транспорт</p>
      <div className="relative flex items-center justify-start">
        <div className="mt-2 flex h-20 w-20 items-center justify-center rounded-md bg-gray-100">
          <BusFront className="h-10 w-10 text-gray-600" />
        </div>
        <div className="ml-3 flex h-full flex-col">
          <p>Автобус компании PKS</p>
          <div className="mt-1 flex items-center justify-start">
            <div className="flex items-center justify-start">
              <AirVent className="h-5 w-5 text-gray-500" />
              <p className="ml-2 text-sm text-gray-500">Кондиционер</p>
            </div>
            <div className="ml-6 flex items-center justify-start">
              <Briefcase className="h-5 w-5 text-gray-500" />
              <p className="ml-2 text-sm text-gray-500">Багажное отделение</p>
            </div>
            <div className="ml-6 flex items-center justify-start">
              <Lightbulb className="h-5 w-5 text-gray-500" />
              <p className="ml-2 text-sm text-gray-500">
                Индивидуальное освещение
              </p>
            </div>
            <div className="ml-6 flex items-center justify-start">
              <BatteryCharging className="h-5 w-5 text-gray-500" />
              <p className="ml-2 text-sm text-gray-500">Розетка</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-start">
            <PlaneTakeoff className="h-5 w-5" />
            <p className="ml-2 text-lg font-medium">Старт</p>
          </div>
          <p className="mt-1 text-base">13 мая, 13:00 (местное время)</p>
          <p className="text-sm text-gray-500">Варшава</p>
        </div>
        <div>
          <div className="flex items-center justify-start">
            <PlaneLanding className="h-5 w-5" />
            <span className="ml-2 text-lg font-medium">Финиш</span>
          </div>
          <p className="mt-1 text-base">19 мая, 15:00 (местное время)</p>
          <p className="text-sm text-gray-500">Варшава</p>
        </div>
      </div>
    </section>
  );
}
