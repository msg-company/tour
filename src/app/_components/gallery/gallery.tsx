import Image from "next/image";
import slides from "@/app/slides";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NextJsImage from "@/components/ui/next-js-image";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
    setOpen(true);
  };
  return (
    <>
      <section className="container mx-auto bg-white">
        <div className=" relative mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-10">
          <div
            className="group relative col-span-5 cursor-pointer "
            onClick={() => handlePhotoClick(0)}
          >
            <div className="opacity-0 transition-all duration-300 before:absolute before:h-full before:w-full before:rounded-3xl before:border-0 before:bg-black/10 group-hover:opacity-100" />
            <Image
              src={slides[0].src}
              alt="My image"
              width={680}
              height={680}
              priority={true}
              className="rounded-bl-3xl rounded-tl-3xl border-0"
            />
          </div>
          <div className="relative col-span-5 grid h-full grid-cols-2 gap-2">
            <div
              className="group relative z-10 cursor-pointer"
              onClick={() => handlePhotoClick(1)}
            >
              <div className="opacity-0 before:absolute before:z-20 before:h-full before:w-full before:border-0 before:bg-black/10 group-hover:opacity-100" />
              <Image
                src={slides[1].src}
                alt="My image"
                priority={true}
                fill={true}
                className="border-0 object-cover"
              />
            </div>
            <div
              className="group relative z-10 cursor-pointer"
              onClick={() => handlePhotoClick(2)}
            >
              <div className="opacity-0 before:absolute before:z-20 before:h-full before:w-full before:rounded-tr-3xl before:border-0 before:bg-black/10 group-hover:opacity-100" />
              <Image
                src={slides[2].src}
                alt="My image"
                priority={true}
                className="rounded-tr-3xl border-0 object-cover"
                fill={true}
              />
            </div>
            <div
              className="group relative z-10 cursor-pointer"
              onClick={() => handlePhotoClick(3)}
            >
              <div className="opacity-0 before:absolute before:z-20 before:h-full before:w-full before:border-0 before:bg-black/10 group-hover:opacity-100" />
              <Image
                src={slides[3].src}
                alt="My image"
                fill={true}
                priority={true}
                className="border-0 object-cover"
              />
            </div>
            <div className="group relative z-10 cursor-pointer">
              <div
                onClick={() => handlePhotoClick(4)}
                className="opacity-0  before:absolute before:z-20 before:h-full before:w-full before:rounded-br-3xl before:border-0 before:bg-black/10 group-hover:opacity-100"
              />
              <Image
                src={slides[4].src}
                alt="My image"
                fill={true}
                priority={true}
                className="rounded-br-3xl border-0 object-cover"
              />
              {slides.length > 5 ? (
                <Button
                  className="absolute bottom-4 right-4 z-30 mt-6"
                  variant="secondary"
                  onClick={() => handlePhotoClick(6)}
                >
                  Еще {slides.length - 5} фото
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
        plugins={[Counter, Thumbnails]}
        index={selectedPhotoIndex}
      />
    </>
  );
}
