import { Check, X } from "lucide-react";

const Included = [
  "размещение в гостиницах и гостевых домах (завтраки включены)",
  "услуги сертифицированного гида на все дни тура",
  "транспортное обеспечение, транспортные затраты",
];

const NotIncluded = ["билеты на автобус", "завтрак в гостинице"];
export function TourConditions() {
  return (
    <section className="container mx-auto bg-white">
      <h3 className="mt-8 text-3xl font-bold">Условия тура</h3>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5">
          <h4 className="mt-4 text-xl ">Включено в стоимость</h4>
          <ul className="mt-2 space-y-2">
            {Included.map((item, index) => (
              <li className="flex items-center space-x-2" key={index}>
                <div className="flex h-5 w-5  items-center justify-center rounded-md border border-green-500 bg-green-500">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="m-0 text-sm">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-5">
          <h4 className="mt-4 text-xl ">Оплачивается отдельно</h4>
          <ul className="mt-2 space-y-2">
            {NotIncluded.map((item, index) => (
              <li className="flex items-center space-x-2" key={index}>
                <div className="flex h-5 w-5  items-center justify-center rounded-md border border-gray-300 bg-gray-300">
                  <X className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="m-0 text-sm">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
