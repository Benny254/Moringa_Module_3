import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/AdminPortal";
import { CoffeeProvider } from "./context/CoffeeContext";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home onShopClick={() => setActivePage("shop")} />;
      case "shop":
        return <Shop />;
      case "admin":
        return <AdminPortal />;
      default:
        return <Home />;
    }
  };

  return (
    <CoffeeProvider>
      <div className="app">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="main-content">{renderPage()}</main>
      </div>
    </CoffeeProvider>
  );
}