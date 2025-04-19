// src/layouts/MainLayout.tsx
// import { Outlet } from "react-router-dom";
import "../../index.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { useRef} from "react";
const MainLayout = () => {
  const mainDiv = useRef<HTMLDivElement | null>(null);
  return (
    <>
    <Navbar />
    <div ref={mainDiv} className="flex w-screen h-screen bg-[#0a0c0c]">
    <Footer />
    </div>
    </>
  );
};

export default MainLayout;
