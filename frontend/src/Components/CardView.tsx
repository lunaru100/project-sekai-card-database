import { useRef, useState } from "react";
import "./CardView.css";
import Star from "../svgComponents/Star";
import Ribbon from "../svgComponents/Ribbon";

interface Props {
  cardName: string;
  event: string;
  rarity: number;
  imgUrl: string;
}

function CardView({ cardName, event, rarity, imgUrl }: Props) {
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
    <div id="cardView" ref={containerRef} onLoad={handleContainerLoad}>
      <img ref={imgRef} onLoad={handleImageLoad} src={imgUrl} id="cardImg" />
      <div id="infoHolder" style={{ height: contHeight - height }}>
        <div className="cardInfoHolders">
          <span id="cardNameLabel" className="cardLabels">
            CARD NAME
          </span>
          <span id="cardName" className="actualNames">
            {cardName}
          </span>
        </div>
        <div className="cardInfoHolders">
          <span id="cardEventLabel" className="cardLabels">
            EVENT
          </span>
          <span id="cardEvent" className="actualNames">
            {event}
          </span>
        </div>
        <div className="cardInfoHolders" id="rarityHolder">
          <span id="cardRarityLabel" className="cardLabels">
            RARITY
          </span>
          <StarOrRibbon rarity={rarity} />
        </div>
      </div>
    </div>
  );
}

export default CardView;
