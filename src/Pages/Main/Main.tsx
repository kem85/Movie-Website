// src/layouts/MainLayout.tsx
// import { Outlet } from "react-router-dom";
import "../../index.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { LoginPanel } from "../Public Components/LoginPanel";
import { RegisterPanel } from "../Public Components/RegisterPanel";
import { useRef, useState } from "react";

const MainLayout = () => {
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const loginPanel = useRef<HTMLDivElement | null>(null);
  const registerPanel = useRef<HTMLDivElement | null>(null);
  const loginHandler = useRef<HTMLDivElement | null>(null);
  const mainDiv = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={mainDiv} className="overflow-x-hidden">
      <Navbar registerPanel={registerPanel}/>
      <button
        className="bg-blue-300 p-3 rounded-xl cursor-pointer z-20"
        onClick={() => {
          const loginPanelElement = loginPanel.current?.style;
          if (loginPanelElement?.opacity != "100") {
            loginPanel.current?.classList.remove('-translate-y-30');
            loginPanelElement!.opacity = "100";
            loginPanelElement!.visibility = "visible";
            loginHandler.current?.classList.add('fixed');
            loginHandler.current?.classList.add('inset-0');
            loginHandler.current?.classList.remove('invisible');
            return;
          }
          loginPanelElement.opacity = "0";
          loginPanelElement.visibility = "hidden";
          loginPanel!.current?.classList.add('-translate-y-30');
          loginHandler.current?.classList.remove('fixed');
          loginHandler.current?.classList.remove('inset-0');
          loginHandler.current?.classList.remove('invisible');
          loginHandler.current?.classList.remove("opacity-100");
        }}
      >
        Toggle
      </button>
      <main className="flex items-center justify-center h-screen">
        <LoginPanel registerPanel={registerPanel} loginPanel={loginPanel} loginHandler={loginHandler}/>
        <RegisterPanel loginPanel={loginPanel} registerPanel={registerPanel}/>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
