import "./global.css";
import Header from "./components/Header/";
import Navbar from "./components/Navbar/";
import { useState } from "react";
import AddPage from "./pages/AddPage.js";
import BookmarkPage from "./pages/BookmarkPage.js";
import ProfilPage from "./pages/ProfilPage.js";
import HomePage from "./pages/HomePage.js";
import { myCardArray } from "./components/utils/Array.js";

function App() {
  const [isActive, setActive] = useState("homePage");
  const [isCards, setCards] = useState(myCardArray);

  function appendCard(questionInput, answerInput, tagsInput) {
    setCards((alterWert) => {
      const neuerWert = [
        ...alterWert,
        { question: questionInput, answer: answerInput, tags: [tagsInput] },
      ];
      return neuerWert;
    });
  }

  console.log(isCards);

  return (
    <div>
      {<Header />}
      <main>
        {isActive === "homePage" && <HomePage cards={isCards} />}
        {isActive === "bookmarkPage" && <BookmarkPage />}
        {isActive === "addPage" && (
          <AddPage appendCard={appendCard} setActive={setActive} />
        )}
        {isActive === "profilPage" && <ProfilPage />}
      </main>
      <footer>
        <Navbar isActive={isActive} setActive={setActive} />
      </footer>
    </div>
  );
}

export default App;
