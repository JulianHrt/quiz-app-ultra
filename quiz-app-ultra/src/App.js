import "./global.css";
import Header from "./components/Header/";
import Navbar from "./components/Navbar/";
import { useState } from "react";
import AddPage from "./pages/AddPage.js";
import BookmarkPage from "./pages/BookmarkPage.js";
import ProfilPage from "./pages/ProfilPage.js";
import HomePage from "./pages/HomePage.js";
import { cards } from "./components/utils/Array";

function App() {
  const [isActive, setActive] = useState("homePage");

  return (
    <div>
      <Header />
      <main>
        {isActive === "homePage" && <HomePage cards={cards} />}
        {isActive === "bookmarkPage" && <BookmarkPage />}
        {isActive === "addPage" && <AddPage />}
        {isActive === "profilPage" && <ProfilPage />}
      </main>
      <footer>
        <Navbar isActive={isActive} setActive={setActive} />
      </footer>
    </div>
  );
}

export default App;
