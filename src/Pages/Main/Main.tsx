// src/layouts/MainLayout.tsx
// import { Outlet } from "react-router-dom";
import '../../index.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { LoginPanel } from "../Public Components/LoginPanel";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="">
        <LoginPanel/>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
