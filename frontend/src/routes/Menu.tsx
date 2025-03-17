import { Outlet } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div id="menu">
      <div id="menuContainer">
        <div id="mainMenu">
          <img id="logo" src="/logo_PS.svg" alt="logo" />
          <span>CARDS</span>
          <span>GAME NEWS</span>
        </div>
        <div id="loginMenu">
          <span>LOGIN</span>
          <span>SIGN UP</span>
        </div>
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Menu;
