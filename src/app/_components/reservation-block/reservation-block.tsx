import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Baby,
  ChevronDown,
  Glasses,
  InfoIcon,
  Minus,
  PawPrint,
  Plus,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Ticket {
  id: number;
  type: "adult" | "child" | "pet";
  name: string;
  description: string;
  modal_title?: string;
  icon: FC<{ className?: string }>;
  price: number;
  discount: number;
  quantity: number;
}

const TICKET_DATA: Ticket[] = [
  {
    id: 1,
    type: "adult",
    name: "Взрослый",
    description: "От 16 лет",
    icon: UserRound,
    price: 240,
    discount: 0,
    quantity: 1,
  },
  {
    id: 2,
    name: "Дети",
    type: "child",
    description: "От 6 до 16 лет",
    icon: Baby,
    price: 240,
    discount: 10,
    quantity: 0,
  },
  {
    id: 3,
    name: "Пенсионеры",
    type: "adult",
    description: "От 60 лет",
    icon: Glasses,
    price: 240,
    discount: 10,
    quantity: 0,
  },
  {
    id: 4,
    name: "Питомцы",
    type: "pet",
    description: "Животное помощник?",
    modal_title: "Описания с животными",
    icon: PawPrint,
    price: 0,
    discount: 0,
    quantity: 0,
  },
];
export function ReservationBlock() {
  const [tickets, setTickets] = useState<Ticket[]>(TICKET_DATA);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [tourData, setTourData] = useState<string>("22-06-07-06");
  const [isOpenTicketsMenu, setIsOpenTicketsMenu] = useState<boolean>(false);

  const [width, setWidth] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalBuyTicketOpen, setIsModalBuyTicketOpen] =
    useState<boolean>(false);

  const [modalContent, setModalContent] = useState<string>("");

  const handleDescriptionClick = (
    modalTitle: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation(); // Остановить распространение события клика
    setModalContent(modalTitle);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      const divWidth = document.getElementById("select-tickets")!.offsetWidth;
      setWidth(divWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalPrice = tickets.reduce((acc, ticket) => {
      return acc + ticket.price * ticket.quantity;
    }, 0);

    const totalDiscount = tickets.reduce((acc, ticket) => {
      return acc + (ticket.price * ticket.quantity * ticket.discount) / 100;
    }, 0);

    setTotalPrice(totalPrice);
    setTotalDiscount(totalDiscount);
  }, [tickets]);
  const handleTicketQuantityChange = (id: number, newQuantity: number) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket,
      ),
    );
  };

  const getTicketText = (
    adults: number,
    children: number,
    pet: number,
  ): string => {
    const formatTicket = (
      count: number,
      singular: string,
      plural: string,
    ): string => {
      return count === 1 ? `${count} ${singular}` : `${count} ${plural}`;
    };

    const tickets = [
      { count: adults, singular: "взрослый", plural: "взрослых" },
      { count: children, singular: "ребенок", plural: "ребёнка" },
      { count: pet, singular: "животное", plural: "животных" },
    ];

    const ticketTexts = tickets
      .filter((ticket) => ticket.count > 0)
      .map((ticket) =>
        formatTicket(ticket.count, ticket.singular, ticket.plural),
      );

    return ticketTexts.join(", ");
  };

  const getTotalQuantityByType = (tickets: Ticket[], type: string): number => {
    return tickets.reduce(
      (total, ticket) =>
        ticket.type === type ? total + ticket.quantity : total,
      0,
    );
  };

  const adultsQuantity = getTotalQuantityByType(tickets, "adult");
  const childrenQuantity = getTotalQuantityByType(tickets, "child");
  const petQuantity = getTotalQuantityByType(tickets, "pet");

  return (
    <>
      <Card className="w-full shadow-md">
        <CardHeader>
          <CardTitle>240 €</CardTitle>
          <CardDescription>
            <span className="text-sm text-gray-500">24 € / день • 10 дней</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={tourData} onValueChange={setTourData}>
            <SelectTrigger id="dates">
              <Label>Дата тура</Label>
              <SelectValue placeholder="Выберите даты" aria-label={tourData} />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="22-06-07-06">22 июн. – 6 июл.</SelectItem>
              <SelectItem value="28-06-07-10">28 июн. – 10 июл.</SelectItem>
            </SelectContent>
          </Select>
          <Popover onOpenChange={(e) => setIsOpenTicketsMenu(e)}>
            <PopoverTrigger asChild className="relative w-full">
              <Button
                variant="outline"
                className="mt-2 h-auto w-full px-3"
                id="select-tickets"
              >
                <div className="flex w-full items-center justify-between ">
                  <div className="flex flex-col items-start ">
                    <Label>Для кого</Label>
                    <span className="my-1 text-sm text-gray-500">
                      {getTicketText(
                        adultsQuantity,
                        childrenQuantity,
                        petQuantity,
                      )}
                    </span>
                  </div>
                  <div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 opacity-50 transition-all delay-200",
                        {
                          "rotate-180": isOpenTicketsMenu,
                        },
                      )}
                    />
                  </div>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent style={{ width: `${width}px` }}>
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="mt-2 flex items-center justify-between"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                      <ticket.icon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-col items-center justify-between">
                      <div className="text-base font-medium">{ticket.name}</div>
                      {ticket.modal_title ? (
                        <div
                          className="cursor-pointer text-sm text-gray-500 underline underline-offset-2 hover:text-gray-500"
                          onClick={(e) => {
                            handleDescriptionClick(ticket.modal_title ?? "", e);
                          }}
                        >
                          {ticket.description}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">
                          {ticket.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() =>
                        handleTicketQuantityChange(
                          ticket.id,
                          Math.max(0, ticket.quantity - 1),
                        )
                      }
                      disabled={ticket.quantity <= 0}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-xl font-bold tracking-tighter">
                        {ticket.quantity}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() =>
                        handleTicketQuantityChange(
                          ticket.id,
                          ticket.quantity + 1,
                        )
                      }
                      disabled={ticket.quantity >= 10}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase</span>
                    </Button>
                  </div>
                </div>
              ))}
              <p className="mt-3 text-xs leading-4 text-gray-500">
                Тур рассчитан максимум на 26 участников, не считая младенцев.
                Если вы планируете взять больше 1 питомца, сообщите об этом
                администрации.
              </p>
            </PopoverContent>
          </Popover>

          <div className=" mt-1 text-center text-sm text-green-500">
            Осталось 8 из 26 мест
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Гарантия проведения</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-5 w-5 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Тур будет проведен даже при неполной группе</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Мгновенное бронирование</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-5 w-5 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Подтверждение сразу после оплаты</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Отмена бронирования</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-5 w-5 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Полная отмена в течение 24 часов</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex-col">
            <Button
              className="mt-6 w-full"
              onClick={() => setIsModalBuyTicketOpen(true)}
            >
              Забронировать
            </Button>
            <hr className="m-0 mb-2 mt-6 w-full border-b  border-t-0 border-solid border-b-gray-200" />
            <div className="flex w-full items-center justify-between">
              <p>Скидка</p>
              <p>{totalDiscount} €</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Итого</p>
              <p>{totalPrice - totalDiscount} €</p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{modalContent}</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isModalBuyTicketOpen}
        onOpenChange={setIsModalBuyTicketOpen}
      >
        <DialogContent className="flex h-screen min-w-[90%]">
          <div className="grid grid-cols-12">
            <div className="col-span-7 flex flex-col gap-2">
              Забронировать тур
            </div>
            <div className="col-span-5">
              <div className="flex flex-col gap-1 rounded-lg border border-solid p-4">
                <hr className="m-0 my-4 w-full border-b border-t-0 border-solid border-b-gray-200" />
                <div className="flex items-center justify-between">
                  <p className="text-base font-light text-black">
                    € 240 x 7 билетов
                  </p>
                  <p className="text-base font-light text-black">€ 1 400,00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-light text-black">Скидка</p>
                  <p className="text-base font-light text-green-500">
                    € -140,00
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-light text-black">Налог</p>
                  <p className="text-base font-light text-black">€ 18,00</p>
                </div>
                <hr className="m-0 my-4 w-full border-b border-t-0 border-solid border-b-gray-200" />
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-black">Итого:</p>
                  <p className="text-base font-semibold text-black">
                    € 2 000,00
                  </p>
                </div>
                <hr className="m-0 my-4 w-full border-b border-t-0 border-solid border-b-gray-200" />
                <div className="flex flex-col gap-2">
                  <Button
                    size="lg"
                    onClick={() => setIsModalBuyTicketOpen(false)}
                  >
                    Подтвердить и оплатить
                  </Button>

                  <p className="text-xs leading-4 text-gray-500">
                    Я также принимаю{" "}
                    <span className="cursor-pointer font-semibold text-blue-500 underline underline-offset-2 hover:text-blue-600">
                      обновленные
                    </span>{" "}
                    <span className="cursor-pointer font-semibold text-blue-500 underline underline-offset-2 hover:text-blue-600">
                      Условия предоставления услуг
                    </span>
                    ,{" "}
                    <span className="cursor-pointer font-semibold text-blue-500 underline underline-offset-2 hover:text-blue-600">
                      Условия предоставления платежных услуг
                    </span>{" "}
                    и соглашаюсь с{" "}
                    <span className="cursor-pointer font-semibold text-blue-500 underline underline-offset-2 hover:text-blue-600">
                      Политикой конфиденциальности
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
