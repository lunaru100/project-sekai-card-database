import "./MainPage.css";
import Search from "../Components/Search";

function MainPage() {
  return (
    <div
      id="mainPage"
      style={{ backgroundImage: `url(/rui_main_page_bg.png)` }}
    >
      <span id="slogan">HAVE AN ACE UP YOUR SLEEVE</span>
      <Search />
    </div>
  );
}

export default MainPage;
