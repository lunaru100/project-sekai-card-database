import "./Search.css";
import lupa from "../../assets/lupa.png";

function Search() {
  return (
    <div id="search">
      <form id="searchForm">
        <input type="text" id="searchBar" />
        <img src={lupa} id="searchBarIcon"/>
      </form>
    </div>
  );
}

export default Search;
