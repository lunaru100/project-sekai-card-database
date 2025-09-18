import { Outlet, useNavigate } from "react-router-dom";
import { MenuLink } from "../Components/MenuLink";

function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#0d2133] w-screen fixed h-[10vh] flex justify-between z-3 !px-[3vw] py-0 left-0 top-0">
        <div className="flex items-center w-[40vw] h-[10vh] gap-[5vw] justify-start">
          <img
            className="h-[6vh] cursor-pointer"
            src="/logo_PS.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <span>
            <MenuLink to="/cards">CARDS</MenuLink>
          </span>
          <span>
            <MenuLink to="/news">GAME NEWS</MenuLink>
          </span>
        </div>
        <div className="flex items-center w-[20vw] h-[10vh] gap-[5vw] justify-end">
          <span>
            <MenuLink to="/login">LOG IN</MenuLink>
          </span>
          <span>
            <MenuLink to="/register">SIGN UP</MenuLink>
          </span>
        </div>
      </div>
      <div className="!mt-[10vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default Menu;
