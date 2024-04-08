const levels = [
  {
    title: "Базовый уровень",
    amenities: [true, false, false, false],
    description:
      "Подходит для всех вне зависимости от физической подготовки и возраста",
  },
  {
    title: "Средний уровень",
    amenities: [true, true, false, false],
    description:
      "Предполагает умеренную физическую нагрузку, подходящую новичкам",
  },
  {
    title: "Продвинутый уровень",
    amenities: [true, true, true, false],
    description:
      "Не требует специальных навыков, но туристы должны быть в хорошей физической форме: экспедиции, продолжительные сплавы и т.д.",
  },
  {
    title: "Сложный уровень",
    amenities: [true, true, true, true],
    description:
      "Необходим опыт походов, специальные навыки и отличная физическая форма: восхождения, экстремальные сплавы и т.д.",
  },
];

export function DifficultyLevels() {
  return (
    <div>
      <p className="text-lg font-semibold">Уровни сложности</p>
      <p>
        Описание сложности маршрута представляет собой ознакомительную
        информацию о требованиях и условиях путешествия. Этот раздел поможет вам
        лучше понять физические и технические аспекты маршрута.
      </p>
      <div className="mt-4 grid grid-cols-10 gap-4">
        {levels.map((accommodation, index) => (
          <div key={index} className="col-span-5">
            <div className="flex">
              <div className="font-semibold">{accommodation.title}</div>
              <div className="relative ml-2 flex items-center gap-0.5">
                {accommodation.amenities.map((amenity, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${
                      amenity ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500">{accommodation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
