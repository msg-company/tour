import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function GuideInformation() {
  return (
    <section className="mt-6">
      <div className="flex items-center gap-4 text-sm">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>К.В.</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-base font-semibold">Дронов К.В.</p>
          <p className="text-base text-gray-500">Гид с 6 летним опытом</p>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="mt-2 h-auto w-full px-3">
                Задать вопрос
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-center justify-center">
                <p className="mt-8 text-lg font-semibold">
                  Задайте свой вопрос эксперту
                </p>
                <Avatar className="mt-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>К.В.</AvatarFallback>
                </Avatar>
                <div className="mt-2 w-full rounded-2xl border bg-gray-100 p-4">
                  <p className="text-center text-sm">
                    Привет! Меня зовут Кирилл. Я с удовольствием помогу
                    организовать ваше путешествие. Какие вопросы у вас возникли?
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" value="" className="col-span-3" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" value="" className="col-span-3" />
                </div>
                <Textarea placeholder="Напишите здесь своё сообщение." />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Спросить</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
