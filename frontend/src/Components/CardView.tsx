import { useRef, useState } from "react";
import Star from "../svgComponents/Star";
import Ribbon from "../svgComponents/Ribbon";

interface Props {
  cardName: string;
  event: string;
  rarity: number;
  imgUrl: string;
  imgUrlTrained?: string;
}

function CardView({ cardName, event, rarity, imgUrl, imgUrlTrained }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [contHeight, setContHeight] = useState(0);

  const handleImageLoad = () => {
    if (imgRef.current) {
      setHeight(() => imgRef.current!.offsetHeight);
    }
  };

  const handleContainerLoad = () => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      console.log(containerRef.current.getBoundingClientRect());
      setContHeight(
        () =>
          height -
          parseFloat(getComputedStyle(containerRef.current!).paddingTop) -
          2 * parseFloat(getComputedStyle(containerRef.current!).paddingBottom)
      );
    }
  };

  const handleImgMouseEnter = () => {
    console.log(imgUrlTrained);
    if (imgUrlTrained) {
      imgRef.current!.src = imgUrlTrained;
    }
  };
  const handleImgMouseLeave = () => {
    if (imgUrlTrained) {
      imgRef.current!.src = imgUrl;
    }
  };

  const StarOrRibbon = ({ rarity }: { rarity: number }) => {
    if (rarity < 5) {
      return (
        <>
          {Array.from({ length: rarity }).map((_, index) => (
            <Star key={index} />
          ))}
        </>
      );
    } else {
      return <Ribbon />;
    }
  };

  return (
    <div
      className="w-[22.5vw] h-[47.5vh] px-0 !py-[2.5vh] rounded-[2vh] bg-[radial-gradient(#0d2132_0%,_#177683_100%)]"
      ref={containerRef}
      onLoad={handleContainerLoad}
    >
      <div>
        <img
          ref={imgRef}
          onLoad={handleImageLoad}
          onMouseEnter={handleImgMouseEnter}
          onMouseLeave={handleImgMouseLeave}
          src={imgUrl}
          className="w-[90%] flex justify-self-center !mb-[2.5vh] rounded-[2vh]"
        />
      </div>
      <div
        className="w-[90%] flex justify-self-center justify-center flex-col gap-[1vh]"
        style={{ height: contHeight - height }}
      >
        <div className="flex">
          <span id="cardNameLabel" className="font-bold text-[2vh]">
            CARD NAME{" "}
            <span className="font-normal !ml-[0.75vh]">{cardName}</span>
          </span>
        </div>
        <div className="flex">
          <span id="cardNameLabel" className="font-bold text-[2vh]">
            EVENT <span className="font-normal !ml-[0.75vh]">{event}</span>
          </span>
        </div>
        <div className="gap-[0.4vw] flex items-center">
          <span id="cardRarityLabel" className="font-bold text-[2vh]">
            RARITY
          </span>
          <StarOrRibbon rarity={rarity} />
        </div>
      </div>
    </div>
  );
}

export default CardView;
