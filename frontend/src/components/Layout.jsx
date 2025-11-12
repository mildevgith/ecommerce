// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* Aquí se cargan las páginas según la ruta */}
      </main>
      <Footer />
    </>
  );
}
