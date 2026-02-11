import "../Classes.css";
import Search from "../Components/Search";
import CardView from "../Components/CardView";
import Filters from "../Components/Filters";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Card {
  cardId: string;
  cardName: string;
  event: string;
  rarity: number;
  imgUrl: string;
  imgTrainedUrl?: string;
}

interface FiltersState {
  selectedUnits: string[];
  selectedRarities: string[];
  selectedCharacters: string[];
  selectedAvailability: string[];
  selectedAttributes: string[];
  searchTerm: string;
}

const PAGE_SIZE = 30;

function createCard(item: any): Card {
  return {
    cardId: item.CardId,
    cardName: item.CardName,
    event: item.Event?.EventName,
    rarity: item.Rarity?.Rarity,
    imgUrl: item.CardImg,
    imgTrainedUrl: item.CardImgTrained,
  };
}

function CardList() {
  const [searchParams] = useSearchParams();
  const initialUnitFilter = searchParams.get("units");
  const initialSearchFilter = searchParams.get("search");

  const initialFiltersState: FiltersState = {
    selectedUnits: initialUnitFilter ? [initialUnitFilter] : [],
    selectedRarities: [],
    selectedCharacters: [],
    selectedAvailability: [],
    selectedAttributes: [],
    searchTerm: initialSearchFilter || "",
  };

  const [cards, setCards] = useState<Card[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
  const mainWidth = showFilters ? "80vw" : "100vw";
  const marginLeft = showFilters ? "20vw" : "0vw";

  useEffect(() => {
    if (initialUnitFilter) {
      setShowFilters(true);
    }
  }, []);

  const fetchCards = (currentPage: number, currentFilters: FiltersState) => {
    if (currentPage === 0 && cards.length === 0) {
      setIsLoading(true);
    }

    if (currentPage === 0) {
      setIsLoading(true);
    }

    const params = new URLSearchParams();
    params.append("skip", (currentPage * PAGE_SIZE).toString());
    params.append("take", PAGE_SIZE.toString());

    if (currentFilters.selectedUnits.length > 0) {
      params.append("units", currentFilters.selectedUnits.join(","));
    }
    if (currentFilters.selectedRarities.length > 0) {
      params.append("rarities", currentFilters.selectedRarities.join(","));
    }
    if (currentFilters.selectedCharacters.length > 0) {
      params.append("characters", currentFilters.selectedCharacters.join(","));
    }
    if (currentFilters.selectedAvailability.length > 0) {
      params.append(
        "availability",
        currentFilters.selectedAvailability.join(",")
      );
    }
    if (currentFilters.selectedAttributes.length > 0) {
      params.append("attributes", currentFilters.selectedAttributes.join(","));
    }
    if (currentFilters.searchTerm) {
      params.append("search", currentFilters.searchTerm.trim());
    }

    fetch(`http://localhost:3000/api/allCards?${params.toString()}`)
      .then((data) => data.json())
      .then((json) => {
        const { cards: rawCards, total } = json;
        const cardArr = rawCards.map(createCard);
        setTotal(total);
        if (currentPage === 0) {
          setCards(cardArr);
        } else {
          setCards((prev) => [...prev, ...cardArr]);
        }
      })
      .catch((error) => console.error("Error fetching cards:", error))
      .finally(() => setIsLoading(false));
  };

  const LoadingSpinner = () => (
    <div
      className="flex justify-center items-center h-full w-full absolute top-0 left-0 bg-[#162734] bg-opacity-90 z-50"
      style={{ width: mainWidth, marginLeft: marginLeft }}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      <span className="ml-4 text-white text-xl">Loading cards...</span>
    </div>
  );

  useEffect(() => {
    fetchCards(page, filters);
  }, [page, filters]);

  const handleSearchSubmit = (newTerm: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchTerm: newTerm,
    }));
    setPage(0);
  };

  const handleApplyFilters = (newFilters: FiltersState) => {
    setFilters(newFilters);
    setPage(0);
  };

  return (
    <div className="flex">
      {isLoading && <LoadingSpinner />}
      {showFilters && (
        <Filters
          initialFilters={filters}
          onApply={handleApplyFilters}
          onReset={() => {
            handleApplyFilters({
              selectedUnits: [],
              selectedRarities: [],
              selectedCharacters: [],
              selectedAvailability: [],
              selectedAttributes: [],
              searchTerm: "",
            });
          }}
        />
      )}
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
          <Search
            onSearchSubmit={handleSearchSubmit}
            initialSearchTerm={filters.searchTerm}
          />
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
        {cards.length < total && (
          <button
            className="mt-0! mb-[3vh]! formBtn"
            onClick={() => setPage(page + 1)}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default CardList;
