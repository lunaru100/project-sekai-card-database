import "./MainPage.css";
import bg from "../assets/rui_main_page_bg.png";
import Search from "./MainPage/Search";

function MainPage() {
  return (
    <div id="mainPage" style={{ backgroundImage: `url(${bg})` }}>
      <span id="slogan">HAVE AN ACE UP YOUR SLEEVE</span>
      <Search/>
    </div>
  );
}

export default MainPage;
