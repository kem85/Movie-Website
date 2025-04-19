import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Searchbar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  faAlignJustify,
  faUser,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { LoginPanel } from "../../../Public Components/LoginPanel";
import { NavbarProps } from "../../../Public Components/Types/Interfaces";
export  const Navbar = ({registerPanel} : NavbarProps) => {
  const loginPanel = useRef<HTMLDivElement | null>(null);
  const loginHandler = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <LoginPanel registerPanel={registerPanel} loginPanel={loginPanel} loginHandler={loginHandler} />
      <nav className="flex text-white bg-[green] h-20">
        <div className="flex justify-between items-center text-white bg-[green] h-20 px-[50px] w-[100vw]">
          <div className="flex items-center gap-6">
            <MenuIcon className="text-[30px] cursor-pointer" />
            <img
              src="/src/assets/Logo.png"
              alt="Logo"
              className="w-[50px] h-[50px]"
            />
          </div>
          <Searchbar />
          <div
            className="flex items-center gap-5 cursor-pointer hover:text-[#71be68]"
            onClick={() => {
              const loginPanelElement = loginPanel.current?.style;
              if (loginPanelElement?.opacity != "1") {
                loginPanel.current?.classList.remove("-translate-y-30");
                loginPanelElement!.opacity = "1";
                loginPanelElement!.visibility = "visible";
                loginHandler.current?.classList.add("fixed");
                loginHandler.current?.classList.add("inset-0");
                loginHandler.current?.classList.remove("hidden");
                loginHandler.current?.classList.add("flex");
                return;
              }
              loginPanelElement.opacity = "0";
              loginPanelElement.visibility = "hidden";
              loginPanel!.current?.classList.add("-translate-y-30");
              loginHandler.current?.classList.remove("fixed");
              loginHandler.current?.classList.remove("inset-0");
              loginHandler.current?.classList.remove("hidden");
              loginHandler.current?.classList.remove("hidden");
              loginHandler.current?.classList.remove("opacity-1");
            }}
          >
            <FontAwesomeIcon icon={faUser} className="relative -top-0.5"/>
            <span className="text-m">Login</span>
          </div>
        </div>
        {/* <FontAwesomeIcon icon= {faGreaterThan} className= "" />*/}
      </nav>
    </>
  );
}
