import "./CardList.css";
import Search from "../Components/Search";
import "./Classes.css";

function CardList() {
  return (
    <div id="cardList">
      <span id="cardListHeader">
        SEE <span style={{ fontWeight: 300, fontStyle: "normal" }}>ALL</span>{" "}
        CARDS
      </span>
      <div id="searchAndFilters">
        <button className="formBtn" id="filterBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39.203"
            height="35.199"
            viewBox="0 0 39.203 35.199"
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
    </div>
  );
}

export default CardList;
