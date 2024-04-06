import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function TourProgram() {
  return (
    <section>
      <h3 className="mt-8 text-3xl font-bold">Программа тура</h3>
      <Accordion type="single" collapsible className="mt-3 w-full">
        <AccordionItem value="item-1" className="group">
          <AccordionTrigger>
            <div className="flex items-center">
              <Badge variant="secondary">День 1</Badge>
              <p className="ml-4 text-lg group-hover:underline">Бонжур Париж</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-inside list-decimal text-black">
              <li>Ратуша Hôtel de Ville</li>
              <li>Елисейские поля</li>
              <li>Notre-Dame de Paris</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
