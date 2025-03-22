import { Outlet, useNavigate } from "react-router-dom";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div id="menu">
      <div id="menuContainer">
        <div id="mainMenu">
          <img
            id="logo"
            src="/logo_PS.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <span>
            <Link to={"/cards"} className="links">
              CARDS
            </Link>
          </span>
          <span>
            <Link to={"/news"} className="links">
              GAME NEWS
            </Link>
          </span>
        </div>
        <div id="loginMenu">
          <span>
            <Link to={"/login"} className="links">
              LOG IN
            </Link>
          </span>
          <span>
            <Link to={"/register"} className="links">
              SIGN UP
            </Link>
          </span>
        </div>
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Menu;
