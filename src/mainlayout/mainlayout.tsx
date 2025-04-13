// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
