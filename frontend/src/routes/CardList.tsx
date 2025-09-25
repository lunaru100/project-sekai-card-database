import "../Classes.css";
import Search from "../Components/Search";
import CardView from "../Components/CardView";
import Filters from "../Components/Filters";
import { useState } from "react";

interface Card {
  cardId: string;
  cardName: string;
  event: string;
  rarity: number;
  imgUrl: string;
  imgTrainedUrl?: string;
}

function createCard(
  cardId: string,
  cardName: string,
  event: string,
  rarity: number,
  imgUrl: string,
  imgTrainedUrl?: string
): Card {
  return { cardId, cardName, event, rarity, imgUrl, imgTrainedUrl };
}

function CardList() {
  const cards = [
    createCard(
      "bdhbhsnjnsj",
      "A Moment Filled With Warmth",
      "And So, the Clock Hands Started Ticking",
      4,
      "/mafuyu.png",
      "/mafuyu2.png"
    ),
    createCard(
      "bdhbhsndsfsjnsj",
      "A Room That's Now Empty",
      "And So, the Clock Hands Started Ticking",
      4,
      "/kanade.png",
      "/kanade2.png"
    ),
    createCard(
      "bdhbhasassnjnsj",
      "Leaning in Close to the Pain",
      "And So, the Clock Hands Started Ticking",
      4,
      "/len.png",
      "/len2.png"
    ),
    createCard(
      "bdhbhsnjnsadwd",
      "So That We Can Be by Your Side",
      "And So, the Clock Hands Started Tickingt",
      3,
      "/mizuki.png",
      "/mizuki2.png"
    ),
    createCard(
      "sdfdgfhggfgdmhyhg",
      "Wearing Matching Bracelets",
      "And So, the Clock Hands Started Ticking",
      2,
      "/ena.png"
    ),
    createCard(
      "bdhbhadasdsanjnsj",
      "Dive Into Despair",
      "Deep Dark For Light",
      4,
      "/tsukasa.png",
      "/tsukasa2.png"
    ),
    createCard(
      "momkmmmomo",
      "Smile Fairy",
      "Deep Dark For Light",
      4,
      "/emu.png",
      "/emu2.png"
    ),
    createCard(
      "bvnxbbxnvnx",
      "Crafting Props With Heartfelt Care",
      "Deep Dark For Light",
      4,
      "/rui.png",
      "/rui2.png"
    ),
    createCard(
      "bvxzczcxcnxbbxnvnx",
      "Hop, Step, and Hello!",
      "Deep Dark For Light",
      3,
      "/miku.png",
      "/miku2.png"
    ),
    createCard(
      "bvnxbbxnzczxcvnx",
      "Childhood Days Princess",
      "Deep Dark For Light",
      2,
      "/nene.png"
    ),
  ];
  const [showFilters, setShowFilters] = useState(false);
  const mainWidth = showFilters ? "80vw" : "100vw";
  const marginLeft = showFilters ? "20vw" : "0vw";

  return (
    <div className="flex">
      {showFilters && <Filters />}
      <div
        className="min-h-[85vh] flex flex-col items-center gap-[5vh] px-[10vw] py-[2.5vh]"
        style={{ width: mainWidth, marginLeft: marginLeft }}
      >
        <span className="text-center font-black text-[7vh] mt-[3vh]">
          SEE <span className="font-light not-italic">ALL</span> CARDS
        </span>
        <div className="w-[70vw] flex justify-between items-center">
          <button
            className="flex items-center justify-center shadow-[0px_1vh_6px_0px_rgb(14,44,45)] relative !text-[3vh] !w-[15vw] !m-0 !rounded-[10vh] formBtn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39.203"
              height="35.199"
              viewBox="0 0 39.203 35.199"
              className="absolute h-[3vh] left-[0.5vw] top-[50]"
            >
              <g id="filltry" transform="translate(-145.26 -213.53)">
                <rect
                  id="Rectangle_11"
                  data-name="Rectangle 11"
                  width="32.913"
                  height="3.445"
                  transform="translate(145.713 218.007)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_12"
                  data-name="Rectangle 12"
                  width="3.629"
                  height="11.598"
                  transform="translate(180.706 213.53)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_13"
                  data-name="Rectangle 13"
                  width="17.119"
                  height="3.445"
                  transform="translate(184.363 232.924) rotate(180)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_14"
                  data-name="Rectangle 14"
                  width="3.629"
                  height="11.598"
                  transform="translate(165.477 236.599) rotate(180)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_15"
                  data-name="Rectangle 15"
                  width="13.995"
                  height="3.445"
                  transform="translate(159.707 232.924) rotate(180)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_16"
                  data-name="Rectangle 16"
                  width="28.145"
                  height="3.445"
                  transform="translate(145.26 241.61)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_17"
                  data-name="Rectangle 17"
                  width="3.629"
                  height="11.598"
                  transform="translate(175.175 237.13)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_18"
                  data-name="Rectangle 18"
                  width="3.887"
                  height="3.445"
                  transform="translate(180.576 241.61)"
                  fill="#fff"
                />
              </g>
            </svg>
            Filter
          </button>
          <Search />
        </div>
        <div className="flex flex-wrap gap-x-[1.25vw] gap-y-[1.25vw] w-[70vw]">
          {cards.map((card) => (
            <CardView
              key={card.cardId}
              cardName={card.cardName}
              imgUrl={card.imgUrl}
              event={card.event}
              rarity={card.rarity}
              {...(card.imgTrainedUrl
                ? { imgUrlTrained: card.imgTrainedUrl }
                : {})}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardList;
