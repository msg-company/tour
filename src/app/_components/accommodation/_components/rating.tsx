const accommodations = [
  {
    title: "Базовый",
    amenities: [true, false, false, false],
    description:
      "Туристы живут в палатках, кемпингах или хижинах. Удобств нет или они находятся на улице",
  },
  {
    title: "Простой",
    amenities: [true, true, false, false],
    description:
      "Гостевые дома или гостиницы 1*. Удобства могут быть в каждом номере или на этаже",
  },
  {
    title: "Средний",
    amenities: [true, true, true, false],
    description:
      "Апартаменты, коттеджи или гостиницы 2*. Обычно есть удобства: питание и уборка",
  },
  {
    title: "Выше среднего",
    amenities: [true, true, true, true],
    description:
      "Гостиницы 3* или виллы. Обычно удобства в каждом номере, на территории могут быть спа-зона, бассейн и тренажерный зал",
  },
  {
    title: "Премиум",
    amenities: [true, true, true, true],
    description:
      "Гостиницы 4 и 5*, бутик-отели или глэмпинги. Часто включает в себя эксклюзивные услуги вроде собственного бассейна",
  },
];

export function Rating() {
  return (
    <div>
      <p className="text-lg font-semibold">Уровень комфорта</p>
      <p>
        Описание условий проживания, в том числе наличие удобств в месте
        проживания, носит примерный (ознакомительный) характер, не является
        информацией о потребительских свойствах конкретного турпродукта.
      </p>
      <div className="mt-4 grid grid-cols-9 gap-4">
        {accommodations.map((accommodation, index) => (
          <div key={index} className="col-span-3">
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
