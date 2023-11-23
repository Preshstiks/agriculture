import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HeroData } from "@/data/HeroData";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel([Autoplay()]);

  return (
    <div className="embla h-[19rem] w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container backface-hidden">
          {HeroData.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
